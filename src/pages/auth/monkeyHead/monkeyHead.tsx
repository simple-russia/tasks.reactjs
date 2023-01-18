import monkeyHead from 'media/images/monkey_head.png';
import monkeyHands from 'media/images/monkey_hands.png';

import styles from './monkeyHead.module.scss';
import { concatStrings as c } from 'utils/concatStrings';
import { useState } from 'react';


interface IMonkeyHead {
    eyesClosed: boolean,
}


export const MonkeyHead = ({ eyesClosed }: IMonkeyHead) => {
    const [innerEyesClosed, setInnerEyesClosed] = useState(true);

    return (
        <div
            className={styles.container}
            onMouseEnter={() => setInnerEyesClosed(false)}
            onMouseLeave={() => setInnerEyesClosed(true)}
        >
            <img src={monkeyHead} draggable={false} />
            <img
                src={monkeyHands}
                draggable={false}
                className={c(styles.hands, !(!eyesClosed || !innerEyesClosed) && styles.eyesClosed)}
            />
        </div>
    );
};
