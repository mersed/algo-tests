/**
 * Print out the n-th entry in the fibonacci series.
 * The fibonacci series is an ordering of numbers where
 * each number is the sum of the preceeding two.
 * For example, the sequence
 * [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
 * forms the first ten entries of the fibonacci series.
 * ---- Examples
 * fib(4) === 3 		0|1|1|2|3
 */

/**
 * Iterative solution.
 * This iterative solution have realtime complexity of O(n)
 */
function fib(n) {
	let arr = [0, 1];
	for(let i=2; i<=n; i++) {
		let a = arr[i-1];
		let b = arr[i-2];
		arr.push(a+b);
	}

	return arr[n]
}



/**
 * Recursive solution.
 * This solution have exponential realtime complixity O(2^n)
 * Extremly slow solution
 */
function fib2(n) {
	if(n < 2) {
		return n;
	}

	return fib2(n-1) + fib2(n-2);
}


/**
 * Recursive solution + memoization
 */
function fib3(n) {
	if(n < 2) {
		return n;
	}

	return fastFib(n-1) + fastFib(n-2);
}
function memoize(fn) {
 	const cache = {};
 	return function(...args) {
 		if(cache[args]) {
 			return cache[args];
 		}

 		const result = fn.apply(this, args);
 		cache[args] = result;

 		return result;
 	}
 }

const fastFib = memoize(fib3)

module.exports = fastFib;