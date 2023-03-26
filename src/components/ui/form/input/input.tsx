import { EyeClosedIcon, EyeIcon } from 'components/ui/icons';
import { InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import { concatStrings as c } from 'utils/concatStrings';
import { FieldValidator, requiredValidator } from './validators';
import styles from './input.module.scss';


interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    type?: 'text' | 'password',
    prefixIcon?: JSX.Element,
    validators?: FieldValidator[],
    onErrorsChange?: (errors: string[]) => void,
    controlledErrors?: string[],
    value?: string,
}


const DEFAULT_TYPE = 'text';
const DEFAULT_REQUIRED = false;
// required not to create a new array on each render of Input which causes state loops
const DEFAULT_CONTROLLED_ERRORS: string[] = [];
const DEFAULT_VALIDATORS: FieldValidator[] = [];

export const Input = ({
    type=DEFAULT_TYPE,
    style,
    prefixIcon,
    required=DEFAULT_REQUIRED,
    onFocus,
    onBlur,
    value,
    onChange,
    onErrorsChange,
    validators=DEFAULT_VALIDATORS,
    controlledErrors=DEFAULT_CONTROLLED_ERRORS,
    ...inputProps
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

    // invoke validation errors callback when needed
    useEffect(() => {
        if (onErrorsChange) {
            onErrorsChange([...errors, ...controlledErrors]);
        }
    }, [errors, controlledErrors]);

    useEffect(() => {
        validate(value || uncontrolledValue);
    }, [validators]);

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

                <div className={styles.input_wrapper}>
                    {
                        required &&
                        <div className={styles.required}>*</div>
                    }
                    <input
                        ref={inputRef}
                        value={value ?? uncontrolledValue}
                        onChange={onInputChange}
                        type={hasMounted.current ? inputType : 'search'}
                        className={c(styles.input, isPassword && styles.password_input, isPasswordHidden && styles.password_hidden)}
                        onFocus={onFocus}
                        onBlur={onInputBlur}
                        {...inputProps}
                    />
                </div>

                {
                    isPassword &&
                    <div className={styles.reveal_password} onClick={() => setPasswordShown(b => !b)}>
                        {passwordShown ? <EyeClosedIcon /> : <EyeIcon />}
                    </div>
                }
            </div>

            <div className={c(styles.error_text, isTouched.current && [...errors, ...controlledErrors].length && styles.error_appear)}>
                {[...errors, ...controlledErrors][0]}
            </div>
        </div>
    );
};
