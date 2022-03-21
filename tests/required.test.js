import ERROR_MESSAGES from '../data/messages.js';
import Helpers from '../helpers/index.js';
import createValidator from '../index.js';

describe('Required field validation', () => {
    const TYPE = 'required';
    const DATA_KEY = 'source';
    const validator = createValidator({
        [DATA_KEY]: {
            [TYPE]: true,
        },
    });

    test('Valid', () => {
        const data = {
            [DATA_KEY]: 'SOME_PLACEHOLDER_VALUE',
        };
        const valid = validator.validate(data);
        const errors = validator.getErrors();
        const keys = Object.keys(errors);
        expect(valid).toBe(true);
        expect(keys.length).toBe(0);
    });

    test('Invalid', () => {
        const data = {};
        const valid = validator.validate(data);
        const errors = validator.getErrors();
        const keys = Object.keys(errors);
        expect(valid).toBe(false);
        expect(keys.length).toBe(1);
        expect(keys[0]).toBe(DATA_KEY);
        expect(errors[DATA_KEY].length).toBe(1);
        expect(errors[DATA_KEY][0]).toBe(Helpers.getErrorMessage(TYPE, ERROR_MESSAGES[TYPE]));
    });
});
