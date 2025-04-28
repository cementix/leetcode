/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let length = 0

    for (let i = 0, j = 0; i < t.length; i++) {
        if (t[i] === s[j]) {
            j++
            length++
        }
    }

    return length === s.length ? true : false
};