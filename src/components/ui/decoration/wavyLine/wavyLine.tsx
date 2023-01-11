interface IWavyLineProps {
    color?: `#${string}`,
    height?: number,
    width?: number,
    strokeWidth?: number,
    waveLength?: number,
    className?: string,
    style?: React.CSSProperties
}


const DEFAULT_COLOR = '#A0F';
const DEFAULT_HEIGHT = 50;
const DEFAULT_WIDTH = 200;
const DEFAULT_WAVY_LENGTH = 40;
const DEFAULT_STROKE_WIDTH = 3;


export const WavyLine = ({
    color=DEFAULT_COLOR,
    height=DEFAULT_HEIGHT,
    waveLength=DEFAULT_WAVY_LENGTH,
    width=DEFAULT_WIDTH,
    strokeWidth=DEFAULT_STROKE_WIDTH,
    className,
    style,
}: IWavyLineProps) => {
    const iters = width / waveLength;

    const createWavyPath = (iters: number) => {
        let path = `M 0 ${height / 2} C`;

        for (let step = 0; step < iters; step++) {
            path += `${waveLength * step + waveLength / 2} 0,`;
            path += `${waveLength * step + waveLength / 2} ${height},`;
            path += `${waveLength * step + waveLength} ${height / 2} `;
        }

        return path;
    };
    console.log(style);
    return (
        <svg style={style} className={className} xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
            <path strokeWidth={strokeWidth} fill='#0000' stroke={color} d={createWavyPath(iters)} />
        </svg>
    );
};
