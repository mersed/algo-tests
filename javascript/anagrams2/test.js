const anagram = require('./index');

test('Anagram is a function', () => {
  	expect(typeof anagram).toEqual('function');
});

test('Checking ... aaddbcoa', () => {
  	expect(anagram('aaddbcoa')).toEqual(3);
});

test('Checking ... aaabbb', () => {
  	expect(anagram('aaabbb')).toEqual(3);
});

test('Checking ... hhpddl', () => {
  	expect(anagram('hhpddl')).toEqual(3);
});

test('Checking ... ab', () => {
  	expect(anagram('ab')).toEqual(1);
});

test('Checking ... abc', () => {
  	expect(anagram('abc')).toEqual(-1);
});

test('Checking ... mnop', () => {
  	expect(anagram('mnop')).toEqual(2);
});

test('Checking ... xyyx', () => {
  	expect(anagram('xyyx')).toEqual(0);
});

test('Checking ... xxabbbxx', () => {
  	expect(anagram('xxabbbxx')).toEqual(1);
});

test('Checking ... hhpddlnnsjfoyxpciioigvjqzfbpllssuj', () => {
  	expect(anagram('hhpddlnnsjfoyxpciioigvjqzfbpllssuj')).toEqual(10);
});

test('Checking ... dnqaurlplofnrtmh', () => {
  	expect(anagram('dnqaurlplofnrtmh')).toEqual(5);
});

test('Checking ... ubulzt', () => {
  	expect(anagram('ubulzt')).toEqual(3);
});

test('Checking ... vxxzsqjqsnibgydzlyynqcrayvwjurfsqfrivayopgrxewwruvemzy', () => {
  	expect(anagram('vxxzsqjqsnibgydzlyynqcrayvwjurfsqfrivayopgrxewwruvemzy')).toEqual(13);
});

test('Checking ... xtnipeqhxvafqaggqoanvwkmthtfirwhmjrbphlmeluvoa', () => {
  	expect(anagram('xtnipeqhxvafqaggqoanvwkmthtfirwhmjrbphlmeluvoa')).toEqual(13);
});

test('Checking ... gqdvlchavotcykafyjzbbgmnlajiqlnwctrnvznspiwquxxsiwuldizqkkaawpyyisnftdzklwagv', () => {
  	expect(anagram('gqdvlchavotcykafyjzbbgmnlajiqlnwctrnvznspiwquxxsiwuldizqkkaawpyyisnftdzklwagv')).toEqual(-1);
});


