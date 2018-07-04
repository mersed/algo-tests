/**
 * Write a function that returns the number of vowels
 * used in a string.  Vowels are the characters 'a', 'e'
 * 'i', 'o', and 'u'.
 * ---- Examples
 * vowels('Hi There!') --> 3
 * vowels('Why do you ask?') --> 4
 * vowels('Why?') --> 0
 */ 

/**
 * Manual implementation (iteration)
 */
function vowels(str) {
	let arr = ['a', 'e', 'i', 'o', 'u'];
	let count = 0;
	for(let char of str.toLowerCase()) {
		if(arr.includes(char)) count++;
	}

	return count;
}


/**
 * Implementation using regular expressions
 */
function vowels2(str) {
	let match = str.match(/[aeiou]/ig);
	return match ? match.length : 0;
}

module.exports = vowels;
