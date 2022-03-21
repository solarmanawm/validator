import ERROR_MESSAGES from '../data/messages.js';
import Helpers from '../helpers/index.js';
import Queue from './Queue.js';
import Request from './Request.js';

class Validator {
    /**
     * @constructor
     * @param {object} schema
     * @param {object} messages
     */
    constructor (schema, messages) {
        /**
         * @type {Object}
         * @private
         */
        this._schema = schema;

        /**
         * Error messages.
         * @private
         */
        this._messages = {
            ...ERROR_MESSAGES,
            ...messages,
        };

        /**
         * @type {null|string}
         * @private
         */
        this._current = null;

        /**
         * @type {boolean}
         * @private
         */
        this._isValid = true;

        /**
         * @type {Map<any, any>}
         * @private
         */
        this._feedback = new Map();

        /**
         * @type {Map<any, any>}
         * @private
         */
        this._extend = new Map();

        /**
         * @type {Map<any, any>}
         * @private
         */
        this._requests = new Map();

        /**
         * @type {Map<any, any>}
         * @private
         */
        this._handlers = new Map();

        /**
         * @type {boolean}
         * @private
         */
        this._isRegisted = false;

        this._register(schema);
    }

    /**
     * Register requests and handlers.
     * @private
     */
    _register () {
        if (this._isRegisted) {
            return;
        }
        Object.keys(this._schema).forEach((key) => {
            const requests = this._requests.set(key, []).get(key);
            const queue = new Queue();
            Object.keys(this._schema[key]).forEach((k) => {
                const handler = Helpers.getHandler(this, k);
                if (typeof handler !== 'undefined') {
                    requests.push(new Request(k, this._schema[key][k]));
                    queue.add(handler);
                }
            });
            this._handlers.set(key, queue);
        });
        this._isRegisted = true;
    }

    extend () {
        if (this._isRegisted) {
            throw new Error('You need to extend a validator before any validation runs.');
        }
    }

    /**
     * Add a feedback item.
     * @param {object} feedback
     */
    addFeedback (feedback) {
        const current = this._current;
        const feedbackStore = this._feedback.has(current)
            ? this._feedback.get(current)
            : this._feedback.set(current, []).get(current);
        feedbackStore.push(feedback);
        if (this._isValid && !feedback.isPositive()) {
            this._isValid = false;
        }
    }

    /**
     * Validate data.
     * @param {object} validatable
     * @returns {boolean}
     */
    validate (validatable) {
        this._register();
        this._isValid = true;
        this._feedback.clear();
        Object.keys(this._schema).forEach((key) => {
            const queue = this._handlers.get(key);
            const requests = this._requests.get(key);
            if (typeof queue !== 'undefined' && typeof requests !== 'undefined') {
                this._current = key;
                requests.forEach((request) => {
                    request.setValue(validatable[key]);
                    queue.start(request);
                });
            }
        });
        this._current = null;
        return this._isValid;
    }

    /**
     * Get error feedback items.
     * @returns {{}}
     */
    getErrors () {
        const errors = {};
        this._feedback.forEach((feedbacks, key) => {
            const negativeFeedbacks = feedbacks.filter((feedback) => !feedback.isPositive());
            if (negativeFeedbacks.length > 0) {
                errors[key] = negativeFeedbacks.map((feedback) => feedback.toString());
            }
        });
        return errors;
    }

    destroy () {
        this._feedback.clear();
        this._extend.clear();
        this._requests.clear();
        this._handlers.clear();
        delete this._schema;
        delete this._messages;
        delete this._current;
        delete this._isValid;
        delete this._feedback;
        delete this._extend;
        delete this._requests;
        delete this._handlers;
        delete this._isRegisted;
    }
}

export default Validator;
