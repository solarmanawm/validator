import AbstractHandler from './AbstractHandler.js';
import Validator from '../Validator.js';

class PatternHandler extends AbstractHandler {
    /**
     * Validate a value.
     * @param {string} condition
     * @param {string} source
     * @returns {boolean}
     * @private
     */
    _validate (condition, source) {
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
        if (!sourceValidator.validate({source})) {
            throw new Error('PatternHandler: source value needs to be a string');
        }
        conditionValidator.destroy();
        sourceValidator.destroy();
        return new RegExp(condition).test(source);
    }
}

export default PatternHandler;
