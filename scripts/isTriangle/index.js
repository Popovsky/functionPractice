/**
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {boolean}
 */
export default function isTriangle(a, b, c) {
    return isNaN(a) || isNaN(b) || isNaN(c) ? false : a + b > c && a + c > b && b + c > a;
}
