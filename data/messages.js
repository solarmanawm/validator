import HANDLER_TYPES from './types.js';

/**
 * @type {{}}
 */
const ERROR_MESSAGES = {
    [HANDLER_TYPES.email]: 'An email you\'ve entered is invalid.',
    [HANDLER_TYPES.pattern]: 'This field doesn\'t match a provided pattern.',
    [HANDLER_TYPES.required]: 'This field is required.',
    [HANDLER_TYPES.minLength]: 'Min length should be %s%.',
};

export default ERROR_MESSAGES;
