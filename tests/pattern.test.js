import ERROR_MESSAGES from '../data/messages.js';
import Helpers from '../helpers/index.js';
import createValidator from '../index.js';

describe('Pattern validation', () => {
    const TYPE = 'pattern';
    const DATA_KEY = 'source';
    const validator = createValidator({
        [DATA_KEY]: {
            [TYPE]: '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])',
        },
    });

    test('Valid', () => {
        const data = {
            [DATA_KEY]: 'regexp@match.com',
        };
        const valid = validator.validate(data);
        const errors = validator.getErrors();
        const keys = Object.keys(errors);
        expect(valid).toBe(true);
        expect(keys.length).toBe(0);
    });

    test('Invalid', () => {
        const data = {
            [DATA_KEY]: 'invalid reg exp',
        };
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

describe('Type validation', () => {
    const TYPE = 'pattern';
    const DATA_KEY = 'source';
    const validator = createValidator({
        [DATA_KEY]: {
            [TYPE]: '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])',
        },
    });

    test('Number', () => {
        const data = {
            [DATA_KEY]: 123123123,
        };
        expect(() => validator.validate(data)).toThrow(Error);
    });

    test('Boolean', () => {
        const data = {
            [DATA_KEY]: true,
        };
        expect(() => validator.validate(data)).toThrow(Error);
    });

    test('Null', () => {
        const data = {
            [DATA_KEY]: null,
        };
        expect(() => validator.validate(data)).toThrow(Error);
    });

    test('Object', () => {
        const data = {
            [DATA_KEY]: {},
        };
        expect(() => validator.validate(data)).toThrow(Error);
    });

    test('Undefined', () => {
        const data = {
            [DATA_KEY]: undefined,
        };
        expect(() => validator.validate(data)).toThrow(Error);
    });
});
