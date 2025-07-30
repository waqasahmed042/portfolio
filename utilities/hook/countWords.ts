export const countWords = (str: string) => {
    return str.split(/\s+/).filter((word: string) => word !== '').length;
}