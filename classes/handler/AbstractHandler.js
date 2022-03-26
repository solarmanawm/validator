import Feedback from '../Feedback.js';

class AbstractHandler {
    /**
     * @constructor
     * @param {object} validator
     * @param {string} type
     */
    constructor (validator, type = '') {
        const proto = Object.getPrototypeOf(this);
        if (proto.constructor === AbstractHandler) {
            throw new Error('Abstract class should not be instanced.');
        }

        /**
         * @type {Object}
         * @private
         */
        this._validator = validator;

        /**
         * @type {null|object}
         * @private
         */
        this._next = null;

        /**
         * @type {string}
         * @private
         */
        this._type = type;
    }

    /**
     * Set the next handler.
     * @param {object} next
     */
    next (next) {
        this._next = next;
    }

    /**
     * Abstract validation method to be implemented.
     * @param {any} condition
     * @param {any} value
     * @returns {boolean}
     * @private
     */
    _validate (condition, value) {
        throw new Error('[AbstractHandler]: method is not implemented.');
    }

    /**
     * Handle a request.
     * @param {object} request
     * @returns {null|null}
     */
    handle (request) {
        const {type, condition} = request.getDetails();
        if (request.isActive(this._type)) {
            return;
        }
        const message = this._validator._messages[type];
        const valid = this._validate(request);
        this._validator.addFeedback(new Feedback(type, message, condition, valid));
        return this._next ? this._next.handle(request) : null;
    }
}

export default AbstractHandler;
