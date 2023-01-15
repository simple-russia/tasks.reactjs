import { concatStrings as c } from 'utils/concatStrings';
import styles from './titleBar.module.scss';


interface ITitleBar {
    className?: string,
    title?: string,
}


export const TitleBar = ({
    className,
    title,
}: ITitleBar) => {
    return (
        <div className={c(styles.cont, className)}>
            {title}
        </div>
    );
};
