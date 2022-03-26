import HANDLER_TYPES from './types.js';

/**
 * @type {{}}
 */
const ERROR_MESSAGES = {
    [HANDLER_TYPES.type.name]: 'Wrong type: "%s1% "instead of "%s2%".',
    [HANDLER_TYPES.email.name]: 'An email you\'ve entered is invalid.',
    [HANDLER_TYPES.pattern.name]: 'This field doesn\'t match a provided pattern.',
    [HANDLER_TYPES.required.name]: 'This field is required.',
    [HANDLER_TYPES.requiredIf.name]: 'This field is required if...',
    [HANDLER_TYPES.requiredUnless.name]: 'This field is required unless...',
    [HANDLER_TYPES.minLength.name]: 'Min length should be %s%.',
    [HANDLER_TYPES.minLength.name]: 'Max length should be %s%.',
    [HANDLER_TYPES.minValue.name]: 'This value should be at least %s%.',
    [HANDLER_TYPES.maxValue.name]: 'This value should be %s% max.',
};

export default ERROR_MESSAGES;
