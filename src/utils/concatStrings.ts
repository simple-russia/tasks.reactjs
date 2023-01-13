export const concatStrings = (...values: any[]) => {
    return values.filter(Boolean).join(' ');
};
