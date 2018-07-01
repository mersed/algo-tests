const diagonalDifference = require('./index');

test('Anagram is a function', () => {
  	expect(typeof diagonalDifference).toEqual('function');
});

test('Checking ... [[1,2], [3,4]]', () => {
  	expect(diagonalDifference([[1,2], [3,4]])).toEqual(0);
});

test('Checking ... [[12, 33, 88], [42, 1, 11], [13, 13, 13]]', () => {
  	expect(diagonalDifference([[12, 33, 88], [42, 1, 11], [13, 13, 13]])).toEqual(76);
});

test('Checking ... [[4, 4, 8, 9], [1, 2, 3, 4], [5, 6, 9, 9], [8, 2, 2, 2]]', () => {
  	expect(diagonalDifference([[4, 4, 8, 9], [1, 2, 3, 4], [5, 6, 9, 9], [8, 2, 2, 2]])).toEqual(9);
});