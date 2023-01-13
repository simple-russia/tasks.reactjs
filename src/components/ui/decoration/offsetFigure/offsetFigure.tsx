interface IOffsetFigureProps {
    width: number,
    height: number,
    backgroundColor?: `#${string}`,
    offset?: number,
    borderWidth?: number,
    borderColor?: `#${string}`,
}


const DEFAULT_COLOR = '#9884fb';
const DEFAULT_OFFSET = 5;
const DEFAULT_BORDER_WIDTH = 1;
const DEFAULT_BORDER_COLOR = '#000';


export const OffsetFigure = ({
    height,
    width,
    backgroundColor=DEFAULT_COLOR,
    offset=DEFAULT_OFFSET,
    borderColor=DEFAULT_BORDER_COLOR,
    borderWidth=DEFAULT_BORDER_WIDTH,
}: IOffsetFigureProps) => {
    return (
        <div style={{ width, height, position: 'relative' }}>
            <div style={{
                width,
                height,
                background: backgroundColor,
                transform: `translate(${offset}px, ${offset}px)`,
                position: 'absolute',
                top: 0,
                left: 0,
            }} />
            <div style={{ width, height, border: `${borderWidth}px ${borderColor} solid`, boxSizing: 'border-box', position: 'relative' }} />
        </div>
    );
};
