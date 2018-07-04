/**
 * Given a square matrix (in format of 2 dimensional array), 
 * calculate the absolute difference between the sums of its diagonals.
 *
 * ---- Examples
 * 1 2 3
 * 4 5 6
 * 9 8 9  
 * The left-to-right diagonal 1+5+9=15 . 
 * The right to left diagonal 3+5+9=17 . Their absolute difference is |15-17|=2.
 */


function diagonalDifference(arr) {
    let len = arr.length;
    let leftDiagonal = 0;
    let rightDiagonal = 0;

    for(let i=0; i<len; i++) {
        leftDiagonal += arr[i][i];
        rightDiagonal += arr[i][len-1-i];
    }
    
    return Math.abs(leftDiagonal - rightDiagonal);
}


module.exports = diagonalDifference;