import AbstractHandler from './AbstractHandler.js';

class MinLengthHandler extends AbstractHandler {
    /**
     * Validate a value.
     * @param {number} condition
     * @param {string|[]} source
     * @returns {boolean}
     * @private
     */
    _validate (condition, source) {
        if (typeof source !== 'string' && !Array.isArray(source)) {
            throw new Error('MinLengthHandler: source is not string or array');
        }
        return source.length >= condition;
    }
}

export default MinLengthHandler;
