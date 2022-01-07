/* 
* Write functions for tests in here!
*
*/

export function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
export function reverseString(str) {
    return str.split("").reverse().join("");
}
export const calculator = {
    sum: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    }
}
export function analyzeArray(arr) {
    // pull each avg, min, max, etc
    // use array destructuring to assign each property to an object
    const average = arr.reduce((a, b) => a + b) / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = parseInt(arr.length);

    return {average, min, max, length};
}