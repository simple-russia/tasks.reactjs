import { ReactComponent as Eye } from 'media/icons/eye.svg';
import { IIcon } from '../userIcon/types';

export const EyeIcon = ({
    color,
    style,
}: IIcon) => {
    return (
        <Eye style={{ width: 20, height: 20, ...style }} />
    );
};
