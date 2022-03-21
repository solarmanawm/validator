import AbstractHandler from './AbstractHandler.js';
import Validator from '../Validator.js';

class RequiredIfHandler extends AbstractHandler {
    /**
     * Validate a value.
     * @param {boolean} condition
     * @param {string} value
     * @returns {boolean}
     * @private
     */
    _validate (condition, value) {
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
        return locator && typeof value !== 'undefined';
    }
}

export default RequiredIfHandler;
