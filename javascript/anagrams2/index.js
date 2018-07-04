/**
 * Two words are anagrams of one another if their letters can be 
 * rearranged to form the other word.
 * In this challenge, you will be given a string. You must split it into two 
 * contiguous substrings, then determine the minimum number of characters to change to make 
 * the two substrings into anagrams of one another.
 
 * For example, given the string 'abccde', you would break it into two parts: 
 * 'abc' and 'cde'. Note that all letters have been used, the substrings are 
 * contiguous and their lengths are equal. Now you can change 'a' and 'b' 
 * in the first substring to 'd' and 'e' to have 'dec' and 'cde' which are anagrams. 
 * Two changes were necessary.
 * ---- Examples
 * anagram('aaabbb') === 3
 * anagram('ab') === 1
 * anagram('abc') === -1
 * anagram('mnop') === 2
 * anagram('xyyx') === 0
 * anagram('xaxbbbxx') === 1
 */

function anagram(s) {
    let len = s.length;

    if(len%2 !== 0) {
        return -1;
    }

    let counter = 0;
    let str1 = s.substring(0,(len/2));
    let str2 = s.substring(len/2); 

    for(let char of str1) {
        let index = str2.indexOf(char);
        if (index === -1){
            counter++;
        } 
        else {
            str2 = str2.substring(0, index) + str2.substring(index + 1);
        }
    }

    return counter;
}

module.exports = anagram;