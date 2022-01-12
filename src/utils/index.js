import { STYLING_CONFIGS } from "../constants";


function pxToRem(size) {
    if (typeof size === "number") {
        return `${Number(size / STYLING_CONFIGS.ROOT_SIZE)}rem`;
    } else {
        throw new Error('size is not a number')
    }
}
export {pxToRem }