/**
 *
 * @param {number} width
 * @param {number} height
 * @returns {boolean}
 */
export default function isRectangle(width, height) {
    return isNaN(width) || isNaN(height) ? 'NaN' : width > 0 && height > 0;
}
