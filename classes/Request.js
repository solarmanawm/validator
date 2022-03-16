class Request {
    /**
     * @constructor
     * @param {string} type
     * @param {any} condition
     */
    constructor (type, condition) {
        /**
         * @type {string}
         * @private
         */
        this._type = type;

        /**
         * @type {*}
         * @private
         */
        this._condition = condition;

        /**
         * @type {null|*}
         * @private
         */
        this._value = null;
    }

    /**
     * Get request data.
     * @returns {{condition: *, type: string, value: *|null}}
     */
    getDetails () {
        return {
            type: this._type,
            value: this._value,
            condition: this._condition,
        };
    }

    /**
     * Set a value for a certain field.
     * @param {any} value
     */
    setValue (value) {
        this._value = value;
    }
}

export default Request;
