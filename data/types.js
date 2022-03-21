/**
 * @type {{requiredUnless: string, minValue: string, maxValue: string, minLength: string, requiredIf: string, pattern: string, type: string, email: string, required: string, maxLength: string}}
 */
const HANDLER_TYPES = {
    type: 'type',
    email: 'email',
    required: 'required',
    requiredIf: 'requiredIf',
    requiredUnless: 'requiredUnless',
    pattern: 'pattern',
    minLength: 'minLength',
    maxLength: 'maxLength',
    minValue: 'minValue',
    maxValue: 'maxValue',
};

export default HANDLER_TYPES;
