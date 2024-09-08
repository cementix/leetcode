/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const array = s.split(' ').filter((word) => word.length > 0)
    return array[array.length - 1].length
};