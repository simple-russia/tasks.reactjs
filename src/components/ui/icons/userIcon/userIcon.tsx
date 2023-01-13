import { ReactComponent as User } from 'media/icons/user.svg';
import { IIcon } from '../types';

export const UserIcon = ({
    color,
    style,
}: IIcon) => {
    return (
        <User style={{ width: 20, height: 20, ...style }} />
    );
};
