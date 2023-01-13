import { EyeIcon } from 'components/ui/icons';
import { useState } from 'react';
import { concatStrings as c } from 'utils/concatStrings';
import { FieldValidator, requiredValidator } from './validators';
import styles from './input.module.scss';


interface IInputProps {
    type?: 'text' | 'password',
    placeholder?: string,
    style?: React.CSSProperties,
    prefixIcon?: JSX.Element,
    validators?: FieldValidator[],
    required?: boolean,
}


const DEFAULT_TYPE = 'text';
const DEFAULT_REQUIRED = false;


export const Input = ({
    placeholder,
    type=DEFAULT_TYPE,
    style,
    prefixIcon,
    validators=[],
    required=DEFAULT_REQUIRED,
}: IInputProps) => {
    const [errors, setErrors] = useState<string[]>([]);
    const [value, setValue] = useState<string>('');
    const [passwordShown, setPasswordShown] = useState(false);

    const hasPrefix = !!prefixIcon;
    const isPassword = type === 'password';
    const inputType = !isPassword ? type : !passwordShown ? type : 'text';

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setValue(value);

        const inputErrors: string[] = [];

        if (required) {
            validators.push(requiredValidator);
        }

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
                    type={inputType}
                    placeholder={placeholder}
                    className={c(styles.input, isPassword && styles.password_input)}
                />

                {
                    isPassword &&
                    <div className={styles.reveal_password} onClick={() => setPasswordShown(b => !b)}>
                        <EyeIcon />
                    </div>
                }
            </div>

            <div className={styles.error_text}>
                {errors[0]}
            </div>
        </div>
    );
};
