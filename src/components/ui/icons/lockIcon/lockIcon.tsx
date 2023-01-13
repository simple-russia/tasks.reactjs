import { ReactComponent as Lock } from 'media/icons/lock.svg';
import { IIcon } from '../userIcon/types';
import styles from './lock.module.scss';


export const LockIcon = ({
    color,
    style,
}: IIcon) => {
    return (
        <Lock style={{ width: 20, height: 20, ...style }} />
    );
};
