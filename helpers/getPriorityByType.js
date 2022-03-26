import HANDLER_TYPES from '../data/types.js';

/**
 * Get a priority of a certain type.
 * @param {string} type
 * @returns {number}
 */
const getPriorityByType = (type) => {
    const {priority} = HANDLER_TYPES[type] || {};
    return priority;
};

export default getPriorityByType;
