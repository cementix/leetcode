/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
    if (k > s.length) return false

    const hash = {}

    let count = 0;

    for (const char of s) {
        if (hash[char]) {
            hash[char]++
        } else {
            hash[char] = 1
        }
    }

    for (const char in hash) {
        if (hash[char] % 2 !== 0) {
            count++
        }
    }

    return count <= k ? true : false
};