import HANDLER_TYPES from '../data/types.js';
import TypeHandler from '../classes/handler/TypeHandler.js';
import EmailHandler from '../classes/handler/EmailHandler.js';
import RequiredHandler from '../classes/handler/RequiredHandler.js';
import RequiredIfHandler from '../classes/handler/RequiredIfHandler.js';
import RequiredUnlessHandler from '../classes/handler/RequiredUnlessHandler.js';
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
        [HANDLER_TYPES.type.name]: () => {
            return new TypeHandler(validator, HANDLER_TYPES.type.name);
        },
        /**
         * @returns {EmailHandler}
         */
        [HANDLER_TYPES.email.name]: () => {
            return new EmailHandler(validator, HANDLER_TYPES.email.name);
        },
        /**
         * @returns {RequiredHandler}
         */
        [HANDLER_TYPES.required.name]: () => {
            return new RequiredHandler(validator, HANDLER_TYPES.required.name);
        },
        /**
         * @returns {RequiredIfHandler}
         */
        [HANDLER_TYPES.requiredIf.name]: () => {
            return new RequiredIfHandler(validator, HANDLER_TYPES.requiredIf.name);
        },
        /**
         * @returns {RequiredUnlessHandler}
         */
        [HANDLER_TYPES.requiredUnless.name]: () => {
            return new RequiredUnlessHandler(validator, HANDLER_TYPES.requiredUnless.name);
        },
        /**
         * @returns {PatternHandler}
         */
        [HANDLER_TYPES.pattern.name]: () => {
            return new PatternHandler(validator, HANDLER_TYPES.pattern.name);
        },
        /**
         * @returns {MinLengthHandler}
         */
        [HANDLER_TYPES.minLength.name]: () => {
            return new MinLengthHandler(validator, HANDLER_TYPES.minLength.name);
        },
        /**
         * @returns {MaxLengthHandler}
         */
        [HANDLER_TYPES.maxLength.name]: () => {
            return new MaxLengthHandler(validator, HANDLER_TYPES.maxLength.name);
        },
        /**
         * @returns {MinValueHandler}
         */
        [HANDLER_TYPES.minValue.name]: () => {
            return new MinValueHandler(validator, HANDLER_TYPES.minValue.name);
        },
        /**
         * @returns {MaxValueHandler}
         */
        [HANDLER_TYPES.maxValue.name]: () => {
            return new MaxValueHandler(validator, HANDLER_TYPES.maxValue.name);
        },
    };
    return typeof handlers[type] === 'function' ? handlers[type]() : undefined;
};

export default getHandler;
