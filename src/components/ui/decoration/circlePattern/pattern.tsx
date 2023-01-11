import moduleStyles from './pattern.module.scss';


type PatternTypes = 'circle' | 'zigzag'

interface IPatternProps {
    width: number,
    height: number,
    type?: PatternTypes,
    color?: `#${string}`,
    styles?: React.CSSProperties,
    className?: string,
}

const DEFAULT_TYPE: PatternTypes = 'circle';
const DEFAULT_COLOR = '#A0F';

const patternClasses: Record<PatternTypes, string> = {
    circle: moduleStyles.circle_pattern,
    zigzag: moduleStyles.zigzag_pattern,
};


export const Pattern = ({
    height,
    width,
    color=DEFAULT_COLOR,
    type=DEFAULT_TYPE,
    styles,
    className,
}: IPatternProps) => {
    const vars = { '--pattern-color': color };
    // TODO add clns concat
    return (
        <div
            className={patternClasses[type] + ` ${className}`}
            style={{
                ...styles,
                ...vars,
                width,
                height,
            }}
        />
    );
};
