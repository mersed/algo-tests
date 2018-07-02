/**
 * Write a function that accepts a positive number N.
 * The function should console log a pyramid shape
 * with N levels using the # character.  Make sure the
 * pyramid has spaces on both the left *and* right hand sides
 * ---- Examples
 *   pyramid(1)
 *       '#'
 *   pyramid(2)
 *       ' # '
 *       '###'
 *   pyramid(3)
 *       '  #  ' 3-1         5-(1)
 *       ' ### ' 3-2 / 2     5-(3)
 *       '#####'			5-5
 */




/**
 * Implementation using language helpers.
 */
function pyramid(n) {
	for(let i=1; i<=n; i++) {
		console.log(' '.repeat(n-i) + '#'.repeat(i*2-1) + ' '.repeat(n-i))
	}
}


/**
 * Manual implementation using loop.
 * 
 */
function pyramid2(n) {
    for(let i=1; i<=n; i++) {
        let rowCache = '';
        let numberOfHash = i*2-1;   
        let emptySpaces = n-i;

        for(j=1; j<=2*emptySpaces + numberOfHash; j++) {
            
            if(j<=emptySpaces || j>emptySpaces + numberOfHash) {
                rowCache += ' ';
            }
            else {
                rowCache += '#';
            }
        }
        console.log(rowCache);
    }
}


/**
 * Manual implementation using recursion
 */
function pyramid3(n, row=1, str='') {
	if(row > n) {
		return;
	}

	let numberOfHash = row*2-1;   
   	let emptySpaces = n-row;

   	if(str.length < emptySpaces || str.length >= emptySpaces + numberOfHash) {
   		str += ' ';
   	}
   	else {
   		str += '#';
   	}


   	if(str.length >= 2*emptySpaces + numberOfHash) {
   		console.log(str);
   		row = row+1;
   		pyramid3(n, row);
   	}
   	else {
   		pyramid3(n, row, str);
   	}

}


module.exports = pyramid3;
