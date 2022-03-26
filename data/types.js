import PRIORITIES from './priorities.js';

const {highest, high, normal, low} = PRIORITIES;

/**
 * @type {{requiredUnless: string, minValue: string, maxValue: string, minLength: string, requiredIf: string, pattern: string, type: string, email: string, required: string, maxLength: string}}
 */
const HANDLER_TYPES = {
    /**
     * Highest priority types.
     */
    type: {
        name: 'type',
        priority: highest,
    },

    /**
     * High priority types.
     */
    required: {
        name: 'required',
        priority: high,
    },
    requiredIf: {
        name: 'requiredIf',
        priority: high,
    },
    requiredUnless: {
        name: 'requiredUnless',
        priority: high,
    },

    /**
     * Normal priority types.
     */
    email: {
        name: 'email',
        priority: normal,
    },
    pattern: {
        name: 'pattern',
        priority: normal,
    },

    /**
     * Low priority types.
     */
    minLength: {
        name: 'minLength',
        priority: low,
    },
    maxLength: {
        name: 'maxLength',
        priority: low,
    },
    minValue: {
        name: 'minValue',
        priority: low,
    },
    maxValue: {
        name: 'maxValue',
        priority: low,
    },
};

export default HANDLER_TYPES;
