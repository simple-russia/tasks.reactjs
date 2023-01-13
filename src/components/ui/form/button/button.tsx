import styles from './button.module.scss';


interface IButtonProps {
    children: JSX.Element | JSX.Element[] | string,
    className?: string,
    style?: React.CSSProperties,
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    disabled?: boolean,
}


const DEFAULT_DISABLED = false;


export const Button = ({
    children,
    className,
    disabled=DEFAULT_DISABLED,
    onClick,
    style,
}: IButtonProps) => {
    // TODO fix with clns
    return (
        <button style={style} className={className + ` ${styles.button} ${disabled && styles.disabled}`} onClick={onClick}>
            {children}
        </button>
    );
};
