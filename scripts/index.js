import isAdult from "./isAdult";
import checkMultiplicity from "./checkMultiplicity";
import isTriangle from "./isTriangle";
import getRectangleArea from "./getRectangleArea";
import getTriangleArea from "./getTriangleArea";
import getRhombusArea from "./getRhombusArea";
import getCylinderArea from "./getCylinderArea";

console.log('Is adult: ', isAdult(18));
console.log('checkMultiplicity: ', checkMultiplicity(1, 2));
console.log('Is triangle: ', isTriangle(3, 4, 5));
console.log('Rectangle area: ', getRectangleArea(3, 4));
console.log('Rectangle area: ', getTriangleArea(3, 4, 5));
console.log('Rectangle area: ', getRhombusArea(3, 4));
console.log('Rhombus area: ', getCylinderArea( 5, 4));
