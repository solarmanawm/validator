import createValidator from './index.js';

const schema = {
    email: {
        minLength: 20,
        maxLength: 200,
        email: true,
        required: true,
        requiredIf: 'locator',
        requiredUnless: 'locator2',
        pattern: '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])',
    },
};

console.time('create')
const validator = createValidator(schema, {});
console.timeEnd('create');

const values = [];
for (let i = 0; i < 1000; i++) {
    values.push(Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5));
}

console.time('validate');
values.forEach((value) => {
    validator.validate({
        email: value,
        locator: false,
        locator2: true,
    });
});
console.timeEnd('validate');
