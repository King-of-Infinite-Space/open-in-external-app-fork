/* eslint-disable import/prefer-default-export */
const iSRepeat = <T>(arr: T[], isEqual?: (a: T, b: T) => boolean): boolean => {
    const { length } = arr;
    if (length <= 1) return false;

    for (let i = 0; i <= length - 2; i++) {
        for (let j = i + 1; j <= length - 1; j++) {
            if (isEqual && isEqual(arr[i], arr[j])) return true;
            if (arr[i] === arr[j]) return true;
        }
    }

    return false;
};

export { iSRepeat };
