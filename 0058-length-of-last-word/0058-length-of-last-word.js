/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    const arr = s.trim().split(' ');
    const lastWord = arr[arr.length - 1];

    return lastWord.length;
};