import Validator from './classes/Validator.js';

const createValidator = (schema, messages = {}) => {
    return new Validator(schema, messages);
};

export default createValidator;
