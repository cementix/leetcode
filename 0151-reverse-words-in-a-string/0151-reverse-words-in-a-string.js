/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.trim().split(" ").filter(word => word.length > 0)

    return arr.reverse().join(" ")
};