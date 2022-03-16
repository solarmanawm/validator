import ERROR_MESSAGES from '../data/messages.js';
import Helpers from '../helpers/index.js';
import createValidator from '../index.js';

describe('Min value validation', () => {
    const TYPE = 'minValue';
    const DATA_KEY = 'source';
    const MIN_VALUE_VALUE = 6;
    const schema = {
        [DATA_KEY]: {
            [TYPE]: MIN_VALUE_VALUE,
        },
    };
    const validator = createValidator(schema);

    test('Empty', () => {
        const data = {
            [DATA_KEY]: '',
        };
        const valid = validator.validate(data);
        const errors = validator.getErrors();
        const keys = Object.keys(errors);
        expect(valid).toBe(false);
        expect(keys.length).toBe(1);
        expect(keys[0]).toBe(DATA_KEY);
        expect(errors[DATA_KEY].length).toBe(1);
        expect(errors[DATA_KEY][0]).toBe(Helpers.getErrorMessage(TYPE, ERROR_MESSAGES[TYPE], MIN_VALUE_VALUE));
    });

    test('Less', () => {
        const data = {
            [DATA_KEY]: 3,
        };
        const valid = validator.validate(data);
        const errors = validator.getErrors();
        const keys = Object.keys(errors);
        expect(valid).toBe(false);
        expect(keys.length).toBe(1);
        expect(keys[0]).toBe(DATA_KEY);
        expect(errors[DATA_KEY].length).toBe(1);
        expect(errors[DATA_KEY][0]).toBe(Helpers.getErrorMessage(TYPE, ERROR_MESSAGES[TYPE], MIN_VALUE_VALUE));
    });

    test('True', () => {
        const data = {
            [DATA_KEY]: true,
        };
        const valid = validator.validate(data);
        const errors = validator.getErrors();
        const keys = Object.keys(errors);
        expect(valid).toBe(false);
        expect(keys.length).toBe(1);
        expect(keys[0]).toBe(DATA_KEY);
        expect(errors[DATA_KEY].length).toBe(1);
        expect(errors[DATA_KEY][0]).toBe(Helpers.getErrorMessage(TYPE, ERROR_MESSAGES[TYPE], MIN_VALUE_VALUE));
    });

    test('False', () => {
        const data = {
            [DATA_KEY]: false,
        };
        const valid = validator.validate(data);
        const errors = validator.getErrors();
        const keys = Object.keys(errors);
        expect(valid).toBe(false);
        expect(keys.length).toBe(1);
        expect(keys[0]).toBe(DATA_KEY);
        expect(errors[DATA_KEY].length).toBe(1);
        expect(errors[DATA_KEY][0]).toBe(Helpers.getErrorMessage(TYPE, ERROR_MESSAGES[TYPE], MIN_VALUE_VALUE));
    });

    test('Null', () => {
        const data = {
            [DATA_KEY]: null,
        };
        const valid = validator.validate(data);
        const errors = validator.getErrors();
        const keys = Object.keys(errors);
        expect(valid).toBe(false);
        expect(keys.length).toBe(1);
        expect(keys[0]).toBe(DATA_KEY);
        expect(errors[DATA_KEY].length).toBe(1);
        expect(errors[DATA_KEY][0]).toBe(Helpers.getErrorMessage(TYPE, ERROR_MESSAGES[TYPE], MIN_VALUE_VALUE));
    });

    test('Equal', () => {
        const data = {
            [DATA_KEY]: MIN_VALUE_VALUE,
        };
        const valid = validator.validate(data);
        const errors = validator.getErrors();
        const keys = Object.keys(errors);
        expect(valid).toBe(true);
        expect(keys.length).toBe(0);
    });

    test('More', () => {
        const data = {
            [DATA_KEY]: 4234234,
        };
        const valid = validator.validate(data);
        const errors = validator.getErrors();
        const keys = Object.keys(errors);
        expect(valid).toBe(true);
        expect(keys.length).toBe(0);
    });
});

describe('Type validation', () => {
    const TYPE = 'minValue';
    const DATA_KEY = 'source';
    const MIN_VALUE_VALUE = 3;
    const schema = {
        [DATA_KEY]: {
            [TYPE]: MIN_VALUE_VALUE,
        },
    };
    const validator = createValidator(schema);

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
