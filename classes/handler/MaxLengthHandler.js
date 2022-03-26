import AbstractHandler from './AbstractHandler.js';
import Validator from '../Validator.js';

class MaxLengthHandler extends AbstractHandler {
    /**
     * Validate a value.
     * @param {object} request
     * @returns {boolean}
     * @private
     */
    _validate (request) {
        const {condition, value} = request.getDetails();
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
        if (!sourceValidator.validate({
            source: value,
        })) {
            throw new Error('MaxLengthHandler: source value needs to be a string or an array');
        }
        conditionValidator.destroy();
        sourceValidator.destroy();
        return value.length <= condition;
    }
}

export default MaxLengthHandler;
