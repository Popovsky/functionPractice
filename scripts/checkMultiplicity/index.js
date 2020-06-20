/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {boolean}
 */
export default function checkMultiplicity(a, b) {
    return isNaN(a) || isNaN(b) ? 'NaN' : a % b === 0;
}
