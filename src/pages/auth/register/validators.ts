import { createLengthValidator, FieldValidator } from 'components/ui/form/input/validators';

export const usernameCharsetValidator: FieldValidator = (value) => {
    const validatorName = 'usernameChars';

    const regexp = /^[a-zA-Z0-9_]*$/;

    if (regexp.test(value)) {
        return { isValid: true, validatorName };
    }

    return { isValid: false, validatorName, errorMessage: 'You can only use latin letters [a-Z], digits 0-9 and _' };
};

export const passwordCharsetValidator: FieldValidator = (value) => {
    const validatorName = 'passwordChars';

    const hasDigitRegexp = /[0-9]/;

    if (!hasDigitRegexp.test(value)) {
        return { isValid: false, validatorName, errorMessage: 'Password has to contain at least one digit 0-9' };
    }

    const hasLetterRegexp = /[a-zA-Z]/;

    if (!hasLetterRegexp.test(value)) {
        return { isValid: false, validatorName, errorMessage: 'Password has to contain at least one latin letter [a-Z]' };
    }

    return { isValid: true, validatorName };
};

export const createPasswordRepeatValidator = (password: string) => {
    const passwordRepeatValidator: FieldValidator<string> = (value) => {
        const validatorName = 'usernameChars';

        if (value === password) {
            return { isValid: true, validatorName };
        }

        return { isValid: false, validatorName, errorMessage: 'Password don\'t match' };
    };

    return passwordRepeatValidator;
};


export const usernameLengthValidator = createLengthValidator(5, 24);

export const passwordLengthValidator = createLengthValidator(8, 32);
