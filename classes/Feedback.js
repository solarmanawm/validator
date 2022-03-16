import Helpers from '../helpers/index.js';

class Feedback {
    /**
     * @constructor
     * @param {string} type
     * @param {string} message
     * @param {any} condition
     * @param {boolean} positive
     */
    constructor (type, message, condition, positive) {
        /**
         * @type {string}
         * @private
         */
        this._type = type;

        /**
         * @type {string}
         * @private
         */
        this._message = message;

        /**
         * @type {*}
         * @private
         */
        this._condition = condition;

        /**
         * @type {boolean}
         * @private
         */
        this._positive = positive;
    }

    /**
     * Is this feedback valid.
     * @returns {boolean}
     */
    isPositive () {
        return this._positive;
    }

    /**
     * Serialize to string.
     * @returns {string}
     */
    toString() {
        return Helpers.getErrorMessage(this._type, this._message, this._condition);
    }
}

export default Feedback;
