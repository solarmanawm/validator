import ERROR_MESSAGES from '../data/messages.js';
import createValidator from '../index.js';

describe('Email validation', () => {
    const EMAIL_KEY = 'email';
    const schema = {
        [EMAIL_KEY]: {
            email: true,
        },
    };
    const validator = createValidator(schema);

    test('Empty', () => {
        const data = {
            [EMAIL_KEY]: '',
        };
        const valid = validator.validate(data);
        const errors = validator.getErrors();
        const keys = Object.keys(errors);
        expect(valid).toBe(false);
        expect(keys.length).toBe(1);
        expect(keys[0]).toBe(EMAIL_KEY);
        expect(errors[EMAIL_KEY].length).toBe(1);
        expect(errors[EMAIL_KEY][0]).toBe(ERROR_MESSAGES[EMAIL_KEY]);
    });

    test('Invalid', () => {
        const data = {
            [EMAIL_KEY]: 'invalid email',
        };
        const valid = validator.validate(data);
        const errors = validator.getErrors();
        const keys = Object.keys(errors);
        expect(valid).toBe(false);
        expect(keys.length).toBe(1);
        expect(keys[0]).toBe(EMAIL_KEY);
        expect(errors[EMAIL_KEY].length).toBe(1);
        expect(errors[EMAIL_KEY][0]).toBe(ERROR_MESSAGES[EMAIL_KEY]);
    });

    test('Valid', () => {
        const data = {
            [EMAIL_KEY]: 'valid@email.com',
        };
        const valid = validator.validate(data);
        const errors = validator.getErrors();
        const keys = Object.keys(errors);
        expect(valid).toBe(true);
        expect(keys.length).toBe(0);
    });
});
