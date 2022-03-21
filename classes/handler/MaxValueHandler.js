import AbstractHandler from './AbstractHandler.js';
import Validator from '../Validator.js';

class MaxValueHandler extends AbstractHandler {
    /**
     * Validate a value.
     * @param {number} condition
     * @param {string|number} source
     * @returns {boolean}
     * @private
     */
    _validate (condition, source) {
        const conditionSchema = {
            condition: {
                type: 'number',
            },
        };
        const sourceSchema = {
            source: {
                type: 'number',
            },
        };
        const conditionValidator = new Validator(conditionSchema, {});
        const sourceValidator = new Validator(sourceSchema, {});
        if (!conditionValidator.validate({condition})) {
            throw new Error('MaxValueHandler: max value needs to be a number');
        }
        if (!sourceValidator.validate({source})) {
            throw new Error('MaxValueHandler: source value needs to be a number');
        }
        conditionValidator.destroy();
        sourceValidator.destroy();
        return source <= condition;
    }
}

export default MaxValueHandler;
