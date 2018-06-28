/**
 * Given an array and chunk size, divide the array into many subarrays
 * where each subarray is of length size.
 * ---- Examples
 * chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
 * chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
 * chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
 * chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
 * chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
 */


/**
 * Default method. Looping through array and constructing
 * things as we want.
 */
function chunk(array, size) {
	let chunked = [];

	for(element of array) {
		const last = chunked[chunked.length - 1];

		if(last && last.length < size) {
			last.push(element);
		}
		else {
			chunked.push([element]);
		}
	}

	return chunked;
}


/**
 * Using helpers for specific language. In this case
 * .splice method which can be used on arrays
 */
function chunk2(array, size) {
	let chunked = [];
	let index = 0;

	while(index < array.length) {
		chunked.push(array.slice(index, index + size));
		index += size;
	}

	return chunked;
}

module.exports = chunked;
