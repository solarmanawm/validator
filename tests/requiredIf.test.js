import ERROR_MESSAGES from '../data/messages.js';
import Helpers from '../helpers/index.js';
import createValidator from '../index.js';

describe('RequiredIf field validation', () => {
    const TYPE = 'requiredIf';
    const DATA_KEY = 'source';
    const LOCATOR_KEY = 'locator';
    const validator = createValidator({
        [DATA_KEY]: {
            [TYPE]: [LOCATOR_KEY],
        },
    });

    test('Valid', () => {
        const data = {
            [LOCATOR_KEY]: true,
            [DATA_KEY]: 'PLACEHOLDER_VALUE',
        };
        const valid = validator.validate(data);
        const errors = validator.getErrors();
        const keys = Object.keys(errors);
        expect(valid).toBe(true);
        expect(keys.length).toBe(0);
    });

    test('Invalid locator', () => {
        const data = {
            [LOCATOR_KEY]: false,
            [DATA_KEY]: 'PLACEHOLDER_VALUE',
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

    test('Invalid value', () => {
        const data = {
            [LOCATOR_KEY]: true,
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
    const TYPE = 'requiredIf';
    const DATA_KEY = 'source';
    const LOCATOR_KEY = 'locator';
    const validator = createValidator({
        [DATA_KEY]: {
            [TYPE]: [LOCATOR_KEY],
        },
    });

    test('Number', () => {
        const data = {
            [LOCATOR_KEY]: 128379123,
            [DATA_KEY]: 'PLACEHOLDER_VALUE',
        };
        expect(() => validator.validate(data)).toThrow(Error);
    });

    test('String', () => {
        const data = {
            [LOCATOR_KEY]: 'asdasdasd',
            [DATA_KEY]: 'PLACEHOLDER_VALUE',
        };
        expect(() => validator.validate(data)).toThrow(Error);
    });

    test('Object', () => {
        const data = {
            [LOCATOR_KEY]: {},
            [DATA_KEY]: 'PLACEHOLDER_VALUE',
        };
        expect(() => validator.validate(data)).toThrow(Error);
    });

    test('Null', () => {
        const data = {
            [LOCATOR_KEY]: null,
            [DATA_KEY]: 'PLACEHOLDER_VALUE',
        };
        expect(() => validator.validate(data)).toThrow(Error);
    });

    test('Undefined', () => {
        const data = {
            [LOCATOR_KEY]: undefined,
            [DATA_KEY]: 'PLACEHOLDER_VALUE',
        };
        expect(() => validator.validate(data)).toThrow(Error);
    });
});
