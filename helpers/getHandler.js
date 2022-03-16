import HANDLER_TYPES from '../data/types.js';
import EmailHandler from '../classes/handler/EmailHandler.js';
import RequiredHandler from '../classes/handler/RequiredHandler.js';
import PatternHandler from '../classes/handler/PatternHandler.js';
import MinLengthHandler from '../classes/handler/MinLengthHandler.js';

/**
 * Get a handler by its type.
 * @param {object} validator
 * @param {string} type
 * @returns {*|undefined}
 */
const getHandler = (validator, type) => {
    /**
     * @type {{}}
     */
    const handlers = {
        /**
         * @returns {EmailHandler}
         */
        [HANDLER_TYPES.email]: () => {
            return new EmailHandler(validator, HANDLER_TYPES.email);
        },
        /**
         * @returns {RequiredHandler}
         */
        [HANDLER_TYPES.required]: () => {
            return new RequiredHandler(validator, HANDLER_TYPES.required);
        },
        /**
         * @returns {PatternHandler}
         */
        [HANDLER_TYPES.pattern]: () => {
            return new PatternHandler(validator, HANDLER_TYPES.pattern);
        },
        /**
         * @returns {MinLengthHandler}
         */
        [HANDLER_TYPES.minLength]: () => {
            return new MinLengthHandler(validator, HANDLER_TYPES.minLength);
        },
    };
    return typeof handlers[type] === 'function' ? handlers[type]() : undefined;
};

export default getHandler;
