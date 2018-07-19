/**
 * Given the root node of a tree, return
 * an array where each element is the width
 * of the tree at each level.
 * --- Examples
 *	Given: 
 *     0
 *   / |  \
 * 1   2   3
 * |       |
 * 4       5
 * Answer: [1, 3, 2]
 */

function levelWidth(root) {
	let counters = [0];
	let buff = [root, 's'];

	while(buff.length > 1) {

		const node = buff.shift();
		if(node === 's') {
			counters.push(0);
			buff.push('s');
		}
		else {
			counters[counters.length-1]++;
			buff.push(...node.children);
		}
	}

	return counters;
}

module.exports = levelWidth;
