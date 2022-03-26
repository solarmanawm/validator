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

        /**
         * @type {boolean}
         * @private
         */
        this._disabled = false;
    }

    isActive (typeToCompare) {
        return typeToCompare === this._type && !this._disabled;
    }

    /**
     * Get request data.
     * @returns {{condition: *, disabled: boolean, type: string, value: (*|null)}}
     */
    getDetails () {
        return {
            type: this._type,
            value: this._value,
            condition: this._condition,
            disabled: this._disabled,
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
