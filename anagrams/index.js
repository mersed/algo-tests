/**
 * Check to see if two provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation.  Consider capital letters to be the same as lower case.
 * --- Examples
 * anagrams('rail safety', 'fairy tales') --> True
 * anagrams('RAIL! SAFETY!', 'fairy tales') --> True
 * anagrams('Hi there', 'Bye there') --> False
 */


/**
 * Using program specific languages.
 */
function anagrams(stringA, stringB) {
	return cleanString(stringA) === cleanString(stringB);
}
function cleanString(str) {
  	return str
    	.replace(/[^\w]/g, '')
    	.toLowerCase()
    	.split('')
    	.sort()
    	.join('');
}


/**
 * Manual implementation
 */
function anagrams2(stringA, stringB) {
	const aCharMap = buildCharMap(stringA);
	const bCharMap = buildCharMap(stringB);

	if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
		return false;
	}

	for(char in aCharMap) {
		if(aCharMap[char] !== bCharMap[char]) {
			return false;
		}
	}

	return true;
}
function buildCharMap(str) {
	let obj = {};

	for(char of str.replace(/[^\w]/g, '').toLowerCase()) {
		obj[char] = obj[char] + 1 || 1; 
	}

	return obj;
}

module.exports = anagrams;
