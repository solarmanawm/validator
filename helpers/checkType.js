const typeCheckers = {
    string: (value) => {
        return typeof value === 'string';
    },
    array: (value) => {
        return Array.isArray(value);
    },
    number: (value) => {
        return typeof value === 'number';
    },
    boolean: (value) => {
        return typeof value === 'boolean';
    },
};

const checkType = (condition, isArray, value) => {
    return isArray
        ? condition.some((type) => typeCheckers[type](value))
        : typeCheckers[condition](value);
};

export default checkType;
