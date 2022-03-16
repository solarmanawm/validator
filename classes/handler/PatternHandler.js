import AbstractHandler from './AbstractHandler.js';

class PatternHandler extends AbstractHandler {
    /**
     * Validate a value.
     * @param {string} condition
     * @param {string} value
     * @returns {boolean}
     * @private
     */
    _validate (condition, value) {
        return new RegExp(condition).test(value.toString());
    }
}

export default PatternHandler;
