import { ReactComponent as Loading } from 'media/icons/loading.svg';
import { IIcon } from '../types';
import styles from './loading.module.scss';



export const LoadingIcon = ({
    color,
    style,
}: IIcon) => {
    return (
        <span style={{ width: 20, height: 20, ...style }} className={styles.loading}>
            <Loading style={{ width: 20, height: 20, ...style }} />
        </span>
    );
};
