/**
 *
 * @param {number} radius
 * @param {number} height
 * @returns {number|string}
 */
export default function getCylinderArea(radius, height) {
    const isCylinder = isNaN(radius) || isNaN(height) || radius <= 0 || height <= 0;
    return isCylinder ? 'Is not a Cylinder' : 2 * Math.PI * radius * (radius + height);
}
