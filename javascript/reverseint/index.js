/**
 * Given an integer, return an integer that is the reverse
 * ordering of numbers
 * ---- Examples
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */


/**
 * Based on conversion int to the string.
 * After that doing reversal on string.
 * After that converting string back to integer.
 */
function reverseInt(n) {
	const reversed = n
		.toString()
		.split('')
		.reverse()
		.join('');

	return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;