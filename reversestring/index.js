/**
 * Given a string, return a new string with the reversed order
 * of characters.
 * ---- Examples
 * reverse('test') === 'tset'
 * reverse('algo') === 'ogla'
 * reverse('block') === 'kcolb'
 */

/**
 * Solution one. Plain and simple (default)
 */
function reverse(str) {
	let revStr = '';
	for(let i=(str.length-1); i>=0; i--) {
		revStr += str[i];
	}
	return revStr;
}

/**
 * Using reverse helper on array.
 * Converting string to the array.
 */
function reverse2(str) {
	const arr = str.split('');
	arr.reverse();
	return arr.join('');
}


/**
 * Using reverse helper on array.
 * Converting string to the array.
 * Same as "reverse2", just minimized without usage
 * of any local variables.
 */
function reverse3(str) {
	return str.split('').reverse().join('');
}


/**
 * Loop through the string using the new
 * ES2015 syntax ...
 * Similar to the 'reverse' function. 
 * Difference is that we are not using manual loop and we are 
 * not taking chars from the back of the string.
 */
function reverse4(str) {
	let revStr = '';

	for(let character of str) {
		revStr = character + revStr;
	}

	return revStr;
}


/**
 * Implementing reverse string by spliting it into an
 * array and using the reducer
 */
function reverse5(str) {
	return str.split('').reduce((revStr, character) => character + revStr, '');
}



module.exports = reverse5;