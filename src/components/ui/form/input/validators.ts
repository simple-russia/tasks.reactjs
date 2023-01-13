export type FieldValidator<Payload=any> = (value: string, payload?: Payload) => {validatorName: string, isValid: boolean, errorMessage?: string};


export const latinCharsValidator: FieldValidator = (value) => {
    const validatorName = 'chats';

    const regexp = /^[a-zA-Z0-9_]*$/;

    if (regexp.test(value)) {
        return { isValid: true, validatorName };
    }

    return { isValid: false, validatorName, errorMessage: 'Use only latin letters, digitd and _' };
};


export const requiredValidator: FieldValidator = (value) => {
    const validatorName = 'required';

    if (value) {
        return { isValid: true, validatorName };
    }

    return { isValid: false, validatorName, errorMessage: 'This field is required' };
};


// export const createLengthValidator = (min: number, max: number) => {
//     const lengthValidator: FieldValidator = (value) => {
//         const validatorName = 'required';

//         if (value) {
//             return { isValid: true, validatorName };
//         }

//         return { isValid: false, validatorName, errorMessage: 'This field is required' };
//     };
// };
