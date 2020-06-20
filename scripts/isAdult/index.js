/**
 *
 * @param {number} age
 * @returns {boolean}
 */
export default function isAdult(age) {
    return isNaN(age) ? 'Invalid age' : age > 17;
}
