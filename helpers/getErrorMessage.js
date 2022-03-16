/**
 * Generate a error message.
 * @param {string} type
 * @param {string} message
 * @param {*} condition
 * @returns {string|*}
 */
const getErrorMessage = (type, message, condition) => {
    const DEFAULT_MESSAGE = `[${type.toUpperCase()}]: no error message provided.`;
    const strategy = {
        default: (message, condition) => {
            return message.replace('%s%', condition);
        },
    };
    return typeof message === 'undefined'
        ? DEFAULT_MESSAGE
        : (strategy[type] || strategy.default)(message, condition);
};

export default getErrorMessage;
