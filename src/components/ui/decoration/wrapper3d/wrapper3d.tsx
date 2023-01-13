import styles from './wrapper3d.module.scss';


interface IWrapper3DProps{
    children: JSX.Element | JSX.Element[],
    style?: React.CSSProperties,
    offset?: number,
    lineWidth?: number,
    borderColor?: `#${string}`,
    backgroundColor?: `#${string}`,
    className?: string,
}

const DEFAULT_OFFSET = 10;
const DEFAULT_LINE_WIDTH = 1;
const DEFAULT_BORDER_COLOR = '#000';
const DEFAULT_BACKGROUND_COLOR = '#000#';


export const Wrapper3d = ({
    style,
    children,
    offset=DEFAULT_OFFSET,
    lineWidth=DEFAULT_LINE_WIDTH,
    backgroundColor=DEFAULT_BACKGROUND_COLOR,
    borderColor=DEFAULT_BORDER_COLOR,
    className,
}: IWrapper3DProps) => {
    const vars = {
        '--border-width': `${lineWidth}px`,
        '--border-color': borderColor,
        '--background-color': backgroundColor,
    };

    return (
        <div
            style={{
                ...vars,
                ...style,
            }}
            className={styles.main + ` ${className}`}
        >
            <div
                className={styles.background}
                style={{
                    clipPath: `polygon(0 0, calc(100% - ${offset}px) 0, 100% ${offset}px, 100% 100%, ${offset}px 100%, 0 calc(100% - ${offset}px))`,
                    overflow: 'hidden',
                }}
            >
                <div className={styles.diagonal_line} style={{ height: lineWidth, width: `${1.44 * offset}px`, bottom: `${offset / 2}px`, left: `-${offset / 5}px` }} />
                <div className={styles.diagonal_line} style={{ height: lineWidth, width: `${1.44 * offset}px`, bottom: `${offset / 2}px`, left: `calc(-${offset / 5}px + 100% - ${offset + 1}px)` }} />
                <div className={styles.diagonal_line} style={{ height: lineWidth, width: `${1.44 * offset}px`, bottom: `calc(${offset / 2}px + 100% - ${offset+1}px)`, left: `calc(-${offset / 5}px + 100% - ${offset + 1}px)` }} />
            </div>


            <div style={{ padding: `0 ${offset}px ${offset}px 0`, height: '100%', width: '100%', boxSizing: 'border-box', position: 'relative' }}>
                <div className={styles.element_container} style={{ height: '100%', width: '100%' }}>
                    {children}
                </div>
            </div>
        </div>
    );
};
