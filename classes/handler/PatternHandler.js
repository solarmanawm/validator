import AbstractHandler from './AbstractHandler.js';
import Validator from '../Validator.js';

class PatternHandler extends AbstractHandler {
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
                type: 'string',
            },
        };
        const sourceSchema = {
            source: {
                type: 'string',
            },
        };
        const conditionValidator = new Validator(conditionSchema, {});
        const sourceValidator = new Validator(sourceSchema, {});
        if (!conditionValidator.validate({condition})) {
            throw new Error('PatternHandler: max length needs to be a number');
        }
        if (!sourceValidator.validate({
            source: value,
        })) {
            throw new Error('PatternHandler: source value needs to be a string');
        }
        conditionValidator.destroy();
        sourceValidator.destroy();
        return new RegExp(condition).test(value);
    }
}

export default PatternHandler;
