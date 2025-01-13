/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    let length = 0;
    const hash = {};

    for (const char of s) {
        if (hash[char]) {
            hash[char]++
        } else {
            hash[char] = 1
        }
    }

    for (const char in hash) {
        if (hash[char] % 2 === 0) {
            length += 2
        } else {
            length += 1
        }
    }

    return length
};