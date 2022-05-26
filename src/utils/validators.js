export const required = (value) => {
    if(value) return undefined;
    return 'This field is required!';
}

export const maxLengthCreator = (maxLength) => (value) => {
    if(value && value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}

export const minLengthCreator = (minLength) => (value) => {
    if(value && value.length < minLength) return console.log(`Must include at least ${minLength} symbols`);
    return undefined;
}