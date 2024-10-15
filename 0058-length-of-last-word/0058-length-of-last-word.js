/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let length = 0
    let found = false

    for (let i = s.length - 1; i >= 0; i--) {
            if (s[i] !== " ") {
                length++
                found = true
            } else if (s[i] === " " && found === true) {
                break
            }
    }

    return length
};