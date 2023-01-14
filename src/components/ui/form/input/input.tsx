import { EyeClosedIcon, EyeIcon } from 'components/ui/icons';
import { useRef, useState } from 'react';
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
    onFocus?: (e: React.FocusEvent<HTMLInputElement, Element>) => void,
    onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value?: string,
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
    onFocus,
    onBlur,
    value,
    onChange,
}: IInputProps) => {
    const [errors, setErrors] = useState<string[]>([]);
    const [passwordShown, setPasswordShown] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const hasPrefix = !!prefixIcon;
    const isPassword = type === 'password';
    const inputType = !isPassword ? type : !passwordShown ? type : 'text';
    const isPasswordHidden = isPassword && inputRef.current?.value && !passwordShown;

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e);
        }

        const inputErrors: string[] = [];

        if (required) {
            validators.push(requiredValidator);
        }

        validators.forEach(validator => {
            const validation = validator(e.target.value);

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
                    ref={inputRef}
                    value={value}
                    onChange={onInputChange}
                    type={inputType}
                    placeholder={placeholder}
                    className={c(styles.input, isPassword && styles.password_input, isPasswordHidden && styles.password_hidden)}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />

                {
                    isPassword &&
                    <div className={styles.reveal_password} onClick={() => setPasswordShown(b => !b)}>
                        {passwordShown ? <EyeClosedIcon /> : <EyeIcon />}
                    </div>
                }
            </div>

            <div className={styles.error_text}>
                {errors[0]}
            </div>
        </div>
    );
};
