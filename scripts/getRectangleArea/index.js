/**
 *
 * @param {number} width
 * @param {number} height
 * @returns {number|string}
 */
export default function getRectangleArea(width, height) {
    return isNaN(width) || isNaN(height) || width <= 0 || height <= 0 ? 'Is not a rectangle' : width * height;
}
