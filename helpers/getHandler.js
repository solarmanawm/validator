import HANDLER_TYPES from '../data/types.js';
import TypeHandler from '../classes/handler/TypeHandler.js';
import EmailHandler from '../classes/handler/EmailHandler.js';
import RequiredHandler from '../classes/handler/RequiredHandler.js';
import PatternHandler from '../classes/handler/PatternHandler.js';
import MinLengthHandler from '../classes/handler/MinLengthHandler.js';
import MaxLengthHandler from '../classes/handler/MaxLengthHandler.js';
import MinValueHandler from '../classes/handler/MinValueHandler.js';
import MaxValueHandler from '../classes/handler/MaxValueHandler.js';

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
         * @returns {TypeHandler}
         */
        [HANDLER_TYPES.type]: () => {
            return new TypeHandler(validator, HANDLER_TYPES.type);
        },
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
        /**
         * @returns {MaxLengthHandler}
         */
        [HANDLER_TYPES.maxLength]: () => {
            return new MaxLengthHandler(validator, HANDLER_TYPES.maxLength);
        },
        /**
         * @returns {MinValueHandler}
         */
        [HANDLER_TYPES.minValue]: () => {
            return new MinValueHandler(validator, HANDLER_TYPES.minValue);
        },
        /**
         * @returns {MaxValueHandler}
         */
        [HANDLER_TYPES.maxValue]: () => {
            return new MaxValueHandler(validator, HANDLER_TYPES.maxValue);
        },
    };
    return typeof handlers[type] === 'function' ? handlers[type]() : undefined;
};

export default getHandler;
