import RequiredIfHandler from './RequiredIfHandler.js';

class RequiredUnlessHandler extends RequiredIfHandler {
    /**
     * Validate a value.
     * @param {boolean} condition
     * @param {string} value
     * @returns {boolean}
     * @private
     */
    _validate (condition, value) {
        return !this._validateLocator(condition) && typeof value !== 'undefined';
    }
}

export default RequiredUnlessHandler;
