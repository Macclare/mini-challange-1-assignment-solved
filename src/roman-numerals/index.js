/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    // declare a variable and sum to zero.
    let totalRoman = 0
// create an object with the key value.
    const numRoman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    // use for loop to loop through
    // create an element variable and store the roman index
    //create a nextElement and store the roman index adding one to it
 for (let i = 0; i < roman.length; i++){
    let element = roman[i];
    let nextElement = roman[i + 1];
// using an if conditional statement, if the nextElement is greater than the element, 
//subtract the nextElement from element, until the whole roman has been looped through.
// else, add the element to the variable (totalRoman), then return  the totalRoman sum.
if (numRoman[nextElement] > numRoman[element]) {
    totalRoman += numRoman[nextElement] - numRoman[element] 
    i++;
}
else{
totalRoman += numRoman[element]
}
 }
 return totalRoman
 }

module.exports = romanToDecimal;
