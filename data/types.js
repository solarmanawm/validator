/**
 * @type {{minValue: string, maxValue: string, minLength: string, pattern: string, email: string, required: string, maxLength: string}}
 */
const HANDLER_TYPES = {
    email: 'email',
    required: 'required',
    pattern: 'pattern',
    minLength: 'minLength',
    maxLength: 'maxLength',
    minValue: 'minValue',
    maxValue: 'maxValue',
};

export default HANDLER_TYPES;
