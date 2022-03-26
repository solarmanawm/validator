import AbstractHandler from './AbstractHandler.js';

class RequiredHandler extends AbstractHandler {
    /**
     * Validate a value.
     * @param {object} request
     * @returns {boolean}
     * @private
     */
    _validate (request) {
        const {condition, value} = request.getDetails();
        return condition ? typeof value !== 'undefined' : true;
    }
}

export default RequiredHandler;
