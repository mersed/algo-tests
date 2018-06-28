/**
 * Given a string, return the character that is most
 * commonly used in the string.
 * ---- Examples
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */


/**
 * Solution with two loops, isolated and separated.
 * Can be used for multiple others solutions and algos easily.
 */
function maxChar(str) {

	let charsObj = {};
	let max = 0;
	let character = '';

	for(let char of str) {
		charsObj[char] = charsObj[char] + 1 || 1;
	}

	for(let char in charsObj) {
		if(max < charsObj[char]) {
			max = charsObj[char];
			character = char;
		}
	}
	return character;
}


/**
 * Solution with only one loop.
 * More optimized
 */
function maxChar2(str) {
	let charsObj = {};
	let max = 0;
	let character = '';

	for(let char of str) {
		charsObj[char] = charsObj[char] + 1 || 1;

		if(max < charsObj[char]) {
			max = charsObj[char];
			character = char;
		}
	}

	return character;
}


module.exports = maxChar;
