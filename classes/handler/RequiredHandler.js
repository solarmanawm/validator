import AbstractHandler from './AbstractHandler.js';

class RequiredHandler extends AbstractHandler {
    /**
     * Validate a value.
     * @param {boolean} condition
     * @param {string} value
     * @returns {boolean}
     * @private
     */
    _validate (condition, value) {
        return condition && value.toString().trim().length !== 0;
    }
}

export default RequiredHandler;
