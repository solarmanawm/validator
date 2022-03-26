import getHandler from './getHandler.js';
import getErrorMessage from './getErrorMessage.js';
import checkType from './checkType.js';
import sortSchemaKeys from './sortSchemaKeys.js';

/**
 * @type {{checkType, getHandler, sortSchemaKeys, getErrorMessage}}
 */
const fns = {
    getHandler,
    getErrorMessage,
    checkType,
    sortSchemaKeys,
};

export default fns;
