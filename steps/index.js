/**
 * Write a function that accepts a positive number N.
 * The function should console log a step shape
 * with N levels using the # character.  Make sure the
 * step has spaces on the right hand side!
 * ---- Examples
 * steps(2)
 * '# '
 * '##'
 * steps(3)
 * '#  '
 * '## '
 * '###'
 * steps(4)
 * '#   '
 * '##  '
 * '### '
 * '####'
 */


/**
 * Using .repeat string helper method.
 */ 
function steps(n) {
	for(let i = 1; i<=n; i++) {
		console.log( '#'.repeat(i) + ' '.repeat(n-i) )
	}
}


/**
 * Manual implementation (with loop)
 */
function steps2(n) {
	for(let i = 1; i<=n; i++) {
		let steps = '';
		
		for(let j=1; j<=n; j++) {
			if(j<=i) {
				steps += '#';
			}
			else {
				steps += ' ';
			}
		}
		console.log(steps);
	}
}


/**
 * Manual implementation (with recurzion)
 */
 function steps3(n, row = 1, steps = '') {

 	if(row > n ) {
 		return;
 	}

 	if(steps.length < n){ 
 		
 		if(steps.length < row) {
 			steps += '#';
 		}
 		else {
 			steps += ' ';
 		}

 		return steps3(n, row, steps);
 	}


 	console.log(steps);
 	steps3(n, row + 1);
}

module.exports = steps;
