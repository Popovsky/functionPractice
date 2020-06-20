import isRectangle from "../isRectangle";
/**
 *
 * @param {number} width
 * @param {number} height
 * @returns {number}
 */
export default function getRectangleArea(width, height) {
    return isRectangle(width, height) ? width * height : 'Is not a rectangle';
}
