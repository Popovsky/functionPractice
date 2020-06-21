/**
 *
 * @param {number} dWidth
 * @param {number} dHeight
 * @returns {number|string}
 */
export default function getRhombusArea(dWidth, dHeight) {
    return isNaN(dWidth) || isNaN(dHeight) || dWidth <= 0 || dHeight <= 0 ? 'Is not a rhombus' : dWidth * dHeight / 2;
}
