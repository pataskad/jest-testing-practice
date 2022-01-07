/* imported functions */

import {
    capitalizeFirstLetter,
    reverseString,
    calculator,
    analyzeArray,
} from "./index";

/* Tests go here! */

describe("capitalizeFirstLetter", () => {
    test("Capitalize the first letter of a given string", () => {
        expect(capitalizeFirstLetter("hello")).toBe("Hello");
    });
});
describe("reverseString", () => {
    test("Reverse a given string", () => {
        expect(reverseString("hello")).toBe("olleh");
    });
});
describe("calculator", () => {
    test("calculate addition correctly", () => {
        expect(calculator.sum(2, 2)).toBe(4);
    });
    test("calculate subtraction correctly", () => {
        expect(calculator.subtract(5, 3)).toBe(2);
    });
    test("calculate multiplication correctly", () => {
        expect(calculator.multiply(5, 5)).toBe(25);
    });
    test("calculate division correctly", () => {
        expect(calculator.divide(25, 5)).toBe(5);
    });
});
/* describe("caesarCipher", () => {
    test("Shift each character", () => {
        expect()
    });
}); */
describe("analyzeArray", () => {
    test("Return an object with avg, min, max, and length properties", () => {
        expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({average: 4, min: 1, max: 8, length: 6});
    });
});