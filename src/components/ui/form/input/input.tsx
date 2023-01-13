import { useState } from 'react';
import { concatStrings as c } from 'utils/concatStrings';
import styles from './input.module.scss';


interface IInputProps {
    type?: 'text' | 'password',
    placeholder?: string,
    style?: React.CSSProperties,
    prefixIcon?: JSX.Element,
}


type Validator = (value: string) => {validatorName: string, isValid: boolean, errorMessage?: string};

const rightChars: Validator = (value) => {
    const validatorName = 'chats';

    const regexp = /^[a-zA-Z0-9_]*$/;

    if (regexp.test(value)) {
        return { isValid: true, validatorName };
    }

    return { isValid: false, validatorName, errorMessage: 'Use only latin letters, digitd and _' };
};

const lengthValidator: Validator = (value) => {
    const validatorName = 'length';

    if (value.length >= 5 && value.length <= 16) {
        return { isValid: true, validatorName };
    }

    return { isValid: false, validatorName, errorMessage: 'Length must be between 6 and 15 charatcers' };
};



const DEFAULT_TYPE = 'text';


export const Input = ({
    placeholder,
    type=DEFAULT_TYPE,
    style,
    prefixIcon,
}: IInputProps) => {
    const [errors, setErrors] = useState<string[]>([]);
    const [value, setValue] = useState<string>('');
    const hasPrefix = !!prefixIcon;

    const validators: Validator[] = [lengthValidator, rightChars];

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setValue(value);

        const inputErrors: string[] = [];

        // const validation = lengthValidator(value);
        // if (!validation.isValid && validation.errorMessage) {
        //     inputErrors.push(validation.errorMessage);
        // }

        validators.forEach(validator => {
            const validation = validator(value);

            if (!validation.isValid && validation.errorMessage) {
                inputErrors.push(validation.errorMessage);
            }
        });

        setErrors(inputErrors);
    };

    return (
        <div className={styles.wrapper} style={style}>
            <div className={c(styles.input_cont, hasPrefix && styles.prefix_input)}>
                {
                    hasPrefix &&
                    <div className={styles.prefix}>
                        {prefixIcon}
                    </div>
                }

                <input
                    value={value}
                    onChange={onChange}
                    type={type}
                    placeholder={placeholder}
                    className={styles.input}
                />
            </div>

            <div className={styles.error_text}>
                {errors[0]}
            </div>
        </div>
    );
};
