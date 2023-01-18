import { EyeClosedIcon, EyeIcon } from 'components/ui/icons';
import { useEffect, useRef, useState } from 'react';
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
    onErrorsChange?: (errors: string[]) => void
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
    onErrorsChange,
}: IInputProps) => {
    const [errors, setErrors] = useState<string[]>([]);
    const [passwordShown, setPasswordShown] = useState(false);
    const [uncontrolledValue, setUncontrolledValue] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);
    const isTouched = useRef(false);
    const hasMounted = useRef(false);

    const hasPrefix = !!prefixIcon;
    const isPassword = type === 'password';
    const inputType = !isPassword ? type : !passwordShown ? type : 'text';
    const isPasswordHidden = isPassword && inputRef.current?.value && !passwordShown;


    const validate = (value: string) => {
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


    const onInputBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        if (onBlur) {
            onBlur(e);
        }
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e);
        }

        validate(e.target.value);
        isTouched.current = true;

        setUncontrolledValue(e.target.value);
    };


    useEffect(() => {
        if (onErrorsChange) {
            onErrorsChange(errors);
        }
    }, [errors]);

    useEffect(() => {
        validate(value || uncontrolledValue);

        hasMounted.current = true;
    }, []);


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
                    value={value ?? uncontrolledValue}
                    onChange={onInputChange}
                    type={hasMounted.current ? inputType : 'search'}
                    placeholder={placeholder}
                    className={c(styles.input, isPassword && styles.password_input, isPasswordHidden && styles.password_hidden)}
                    onFocus={onFocus}
                    onBlur={onInputBlur}
                    name={placeholder}
                    autoComplete="false"
                    id={placeholder}
                />

                {
                    isPassword &&
                    <div className={styles.reveal_password} onClick={() => setPasswordShown(b => !b)}>
                        {passwordShown ? <EyeClosedIcon /> : <EyeIcon />}
                    </div>
                }
            </div>

            <div className={c(styles.error_text, isTouched.current && errors.length && styles.error_appear)}>
                {errors[0]}
            </div>
        </div>
    );
};
