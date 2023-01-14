import { ReactComponent as Tick } from 'media/icons/tick.svg';
import { useState } from 'react';
import { concatStrings as c } from 'utils/concatStrings';
import styles from './checkbox.module.scss';

export const Checkbox = () => {
    const [checked, setChecked] = useState(false);

    return (
        <div className={c(styles.checkbox, checked && styles.checked)} onClick={() => setChecked(v => !v)}>
            <Tick />
        </div>
    );
};
