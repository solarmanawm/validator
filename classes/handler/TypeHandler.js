import Helpers from '../../helpers/index.js';
import AbstractHandler from './AbstractHandler.js';

class TypeHandler extends AbstractHandler {
    /**
     * Validate a value.
     * @param {string|string[]} condition
     * @param {string} value
     * @returns {boolean}
     * @private
     */
    _validate (condition, value) {
        const isString = typeof condition === 'string';
        const isArrayOfStrings = Array.isArray(condition) && condition.reduce((acc, current) => {
            return acc && typeof current === 'string';
        }, true);
        if (!(isString || isArrayOfStrings)) {
            throw new Error('TypeHandler: wrong conditional type.');
        }
        return Helpers.checkType(condition, isArrayOfStrings, value);
    }
}

export default TypeHandler;
