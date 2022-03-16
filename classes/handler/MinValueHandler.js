import AbstractHandler from './AbstractHandler.js';

class MinValueHandler extends AbstractHandler {
    /**
     * Validate a value.
     * @param {number} condition
     * @param {string|number} source
     * @returns {boolean}
     * @private
     */
    _validate (condition, source) {
        const number = Number(source);
        if (isNaN(number)) {
            throw new Error('MinValueHandler: source can not be represented as a number.');
        }
        return number >= condition;
    }
}

export default MinValueHandler;
