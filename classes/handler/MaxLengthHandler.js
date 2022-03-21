import AbstractHandler from './AbstractHandler.js';
import Validator from '../Validator.js';

class MaxLengthHandler extends AbstractHandler {
    /**
     * Validate a value.
     * @param {number} condition
     * @param {string|[]} source
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
                type: ['string', 'array'],
            },
        };
        const conditionValidator = new Validator(conditionSchema, {});
        const sourceValidator = new Validator(sourceSchema, {});
        if (!conditionValidator.validate({condition})) {
            throw new Error('MaxLengthHandler: max length needs to be a number');
        }
        if (!sourceValidator.validate({source})) {
            throw new Error('MaxLengthHandler: source value needs to be a string or an array');
        }
        conditionValidator.destroy();
        sourceValidator.destroy();
        return source.length <= condition;
    }
}

export default MaxLengthHandler;
