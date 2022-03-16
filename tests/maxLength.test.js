import ERROR_MESSAGES from '../data/messages.js';
import Helpers from '../helpers/index.js';
import createValidator from '../index.js';

describe('String max length validation', () => {
    const TYPE = 'maxLength';
    const DATA_KEY = 'source';
    const MAX_LENGTH_VALUE = 6;
    const schema = {
        [DATA_KEY]: {
            [TYPE]: MAX_LENGTH_VALUE,
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
        expect(valid).toBe(true);
        expect(keys.length).toBe(0);
    });

    test('Less', () => {
        const data = {
            [DATA_KEY]: 'asd',
        };
        const valid = validator.validate(data);
        const errors = validator.getErrors();
        const keys = Object.keys(errors);
        expect(valid).toBe(true);
        expect(keys.length).toBe(0);
    });

    test('Equal', () => {
        const data = {
            [DATA_KEY]: 'asdqwe',
        };
        const valid = validator.validate(data);
        const errors = validator.getErrors();
        const keys = Object.keys(errors);
        expect(valid).toBe(true);
        expect(keys.length).toBe(0);
    });

    test('More', () => {
        const data = {
            [DATA_KEY]: 'asdqdawdeawdawwe',
        };
        const valid = validator.validate(data);
        const errors = validator.getErrors();
        const keys = Object.keys(errors);
        expect(valid).toBe(false);
        expect(keys.length).toBe(1);
        expect(keys[0]).toBe(DATA_KEY);
        expect(errors[DATA_KEY].length).toBe(1);
        expect(errors[DATA_KEY][0]).toBe(Helpers.getErrorMessage(TYPE, ERROR_MESSAGES[TYPE], MAX_LENGTH_VALUE));
    });
});

describe('Array max length validation', () => {
    const TYPE = 'maxLength';
    const DATA_KEY = 'source';
    const MAX_LENGTH_VALUE = 3;
    const schema = {
        [DATA_KEY]: {
            [TYPE]: MAX_LENGTH_VALUE,
        },
    };
    const validator = createValidator(schema);

    test('Empty', () => {
        const data = {
            [DATA_KEY]: Array(0),
        };
        const valid = validator.validate(data);
        const errors = validator.getErrors();
        const keys = Object.keys(errors);
        expect(valid).toBe(true);
        expect(keys.length).toBe(0);
    });

    test('Less', () => {
        const data = {
            [DATA_KEY]: Array(2),
        };
        const valid = validator.validate(data);
        const errors = validator.getErrors();
        const keys = Object.keys(errors);
        expect(valid).toBe(true);
        expect(keys.length).toBe(0);
    });

    test('Equal', () => {
        const data = {
            [DATA_KEY]: Array(3),
        };
        const valid = validator.validate(data);
        const errors = validator.getErrors();
        const keys = Object.keys(errors);
        expect(valid).toBe(true);
        expect(keys.length).toBe(0);
    });

    test('More', () => {
        const data = {
            [DATA_KEY]: Array(9),
        };
        const valid = validator.validate(data);
        const errors = validator.getErrors();
        const keys = Object.keys(errors);
        expect(valid).toBe(false);
        expect(keys.length).toBe(1);
        expect(keys[0]).toBe(DATA_KEY);
        expect(errors[DATA_KEY].length).toBe(1);
        expect(errors[DATA_KEY][0]).toBe(Helpers.getErrorMessage(TYPE, ERROR_MESSAGES[TYPE], MAX_LENGTH_VALUE));
    });
});

describe('Wrong type max length validation', () => {
    const TYPE = 'maxLength';
    const DATA_KEY = 'source';
    const MAX_LENGTH_VALUE = 3;
    const schema = {
        [DATA_KEY]: {
            [TYPE]: MAX_LENGTH_VALUE,
        },
    };
    const validator = createValidator(schema);

    test('Number', () => {
        const data = {
            [DATA_KEY]: 6,
        };
        expect(() => validator.validate(data)).toThrow(Error);
    });

    test('Boolean', () => {
        const data = {
            [DATA_KEY]: true,
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

    test('Null', () => {
        const data = {
            [DATA_KEY]: null,
        };
        expect(() => validator.validate(data)).toThrow(Error);
    });
});
