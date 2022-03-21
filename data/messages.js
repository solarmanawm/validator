import HANDLER_TYPES from './types.js';

/**
 * @type {{}}
 */
const ERROR_MESSAGES = {
    [HANDLER_TYPES.type]: 'Wrong type: "%s1% "instead of "%s2%".',
    [HANDLER_TYPES.email]: 'An email you\'ve entered is invalid.',
    [HANDLER_TYPES.pattern]: 'This field doesn\'t match a provided pattern.',
    [HANDLER_TYPES.required]: 'This field is required.',
    [HANDLER_TYPES.requiredIf]: 'This field is required if...',
    [HANDLER_TYPES.minLength]: 'Min length should be %s%.',
    [HANDLER_TYPES.minLength]: 'Max length should be %s%.',
    [HANDLER_TYPES.minValue]: 'This value should be at least %s%.',
    [HANDLER_TYPES.maxValue]: 'This value should be %s% max.',
};

export default ERROR_MESSAGES;
