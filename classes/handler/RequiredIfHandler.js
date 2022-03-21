import AbstractHandler from './AbstractHandler.js';
import Validator from '../Validator.js';

class RequiredIfHandler extends AbstractHandler {
    /**
     * Validate a locatory property.
     * @param {boolean} condition
     * @returns {boolean}
     * @private
     */
    _validateLocator (condition) {
        const locator = this._validator._validatable[condition];
        const conditionSchema = {
            condition: {
                type: 'boolean',
            },
        };
        const conditionValidator = new Validator(conditionSchema, {});
        if (!conditionValidator.validate({
            condition: locator,
        })) {
            throw new Error('RequiredIfHandler: a locator property should be of a boolean type');
        }
        conditionValidator.destroy();
        return locator;
    }

    /**
     * Validate a value.
     * @param {boolean} condition
     * @param {string} value
     * @returns {boolean}
     * @private
     */
    _validate (condition, value) {
        return this._validateLocator(condition) && typeof value !== 'undefined';
    }
}

export default RequiredIfHandler;
