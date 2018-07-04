/**
 * Given a string, return true if the string is a palindrome
 * or false if it is not. Palindromes are strings that form the
 * same word if it is reversed. *Do* include spaces and punctuation in 
 * determining if the string is palindrome
 * ---- Examples
 * palindrome('abba') === true
 * palindrome('abcdefg') === false
 */


/**
 * Default, manual solution without any kind of helpers.
 * cons: more complicated code ... lot of conditions
 * pros: optimal solution ... removed unecessary comparations
 */
function palindrome(str) {
	let isPalindrome = true;
	let strLength = str.length;

	for(let i=0; i<Math.floor(strLength/2); i++) {
		if(str[i] !== str[strLength - 1 - i]) {
			isPalindrome = false
			break;
		}
	}

	return isPalindrome;
}


/**
 * Based on the logic of reverse string. Lets reverse string
 * and then compare it with initial string to conclude is it
 * palindrome or not.
 * Obviously, you can use any of the solution for string
 * reversal from https://github.com/mersed/algo-tests/blob/master/reversestring
 */
function palindrome2(str) {
	const reversed = str.split('').reverse().join('');
	return str === reversed;
}



/**
 * Based on usage of array method in javascript 'every'.
 * Comparing between elements from the beggining of array and
 * mirrored elements at the end of the array.
 * cons: usage of every, and comparing more then its necessary
 * pros: no reversal required
 */
function palindrome3(str) {
	return str.split('').every((char, i) => char === str[str.length-i-1]);
}



module.exports = palindrome;