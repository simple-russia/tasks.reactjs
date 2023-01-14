import { ReactComponent as EyeClosed } from 'media/icons/eyeClosed.svg';
import { IIcon } from '../types';

export const EyeClosedIcon = ({
    color,
    style,
}: IIcon) => {
    return (
        <EyeClosed style={{ width: 20, height: 20, ...style }} />
    );
};
