/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    // declare an emmpty array and store as empty
    let empty = [];
    // declare a variable row and store in array.length
    // declare a variable column and store in array.length with an index of zero
    let row = array.length;
    let column = array[0].length;
// loop through the column using for loop method
    for (let i = 0; i < column; i++){
        empty [i] = Array(row);
    }
// loop through row using for loop method and push or store the array parameter given into the empty array, then return empty.
    for (let j = 0; j< row; j++){
        for (let i = 0; i < column; i++){
            empty [i][j] = array[j][i]
        }
    }
    return empty;
}

module.exports = transpose;
