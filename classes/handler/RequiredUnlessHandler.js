import RequiredIfHandler from './RequiredIfHandler.js';

class RequiredUnlessHandler extends RequiredIfHandler {
    /**
     * Validate a value.
     * @param {object} request
     * @returns {boolean}
     * @private
     */
    _validate (request) {
        const {condition, value} = request.getDetails();
        return !this._validateLocator(condition) && typeof value !== 'undefined';
    }
}

export default RequiredUnlessHandler;
