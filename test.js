import createValidator from './index.js';

const schema = {
    email: {
        minLength: 1,
        maxLength: 200,
        email: true,
        required: true,
    },
};

const validator = createValidator(schema, {});
// console.log('validator: ', validator)
console.log(validator._requests.get('email'))
