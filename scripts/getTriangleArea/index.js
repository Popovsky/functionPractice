import isTriangle from "../isTriangle";

/**
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number|string}
 */
export default function getTriangleArea(a, b, c) {
    const p = (a + b + c) / 2;
    return isTriangle(a, b, c) ? Math.sqrt(p * (p - a) * (p - b) * (p - c)) : 'Is not a triangle';
}
