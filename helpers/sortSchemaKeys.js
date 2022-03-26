import getPriorityByType from './getPriorityByType.js';

/**
 * Sort requests by type priority.
 * @param {string} prev
 * @param {string} next
 * @returns {number}
 */
const sortSchemaKeys = (prev, next) => {
    return getPriorityByType(prev._type) - getPriorityByType(next._type);
};

export default sortSchemaKeys;
