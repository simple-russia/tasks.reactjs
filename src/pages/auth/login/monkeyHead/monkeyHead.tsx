import monkeyHead from 'media/images/monkey_head.png';
import monkeyHands from 'media/images/monkey_hands.png';

import styles from './monkeyHead.module.scss';
import { concatStrings as c } from 'utils/concatStrings';


interface IMonkeyHead {
    eyesClosed: boolean,
}


export const MonkeyHead = ({ eyesClosed }: IMonkeyHead) => {

    return (
        <div className={styles.container}>
            <img src={monkeyHead} draggable={false} />
            <img src={monkeyHands} draggable={false} className={c(styles.hands, eyesClosed && styles.eyesClosed)} />
        </div>
    );
};
