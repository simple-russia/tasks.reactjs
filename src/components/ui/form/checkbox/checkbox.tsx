import { ReactComponent as Tick } from 'media/icons/tick.svg';
import { useState } from 'react';
import { concatStrings as c } from 'utils/concatStrings';
import styles from './checkbox.module.scss';


interface ICheckboxProps {
    value?: boolean,
    onChange?: (checked: boolean) => void,
}


export const Checkbox = ({
    onChange,
    value,
}: ICheckboxProps) => {
    const [uncontrolledChecked, setUncontrolledChecked] = useState(false);

    const onCheckboxToggle = () => {
        if (onChange) {
            // if no controlled value then return uncontrolled value
            onChange(value === undefined ? !uncontrolledChecked : !value);
        }

        setUncontrolledChecked(checked => !checked);
    };

    return (
        <div className={c(styles.checkbox, (value ?? uncontrolledChecked) && styles.checked)} onClick={onCheckboxToggle}>
            <Tick />
        </div>
    );
};
