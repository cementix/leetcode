/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) return false

    const freq1 = {}
    const freq2 = {}

    for (let i = 0; i < word1.length; i++) {
        freq1[word1[i]] = (freq1[word1[i]] || 0) + 1
        freq2[word2[i]] = (freq2[word2[i]] || 0) + 1
    }

    for (const ch in freq1) {
        if (!(ch in freq2)) {
            return false
        }
    }

    for (const ch in freq2) {
        if (!(ch in freq1)) {
            return false
        }
    }

    const counts1 = Object.values(freq1).sort((a, b) => a - b)
    const counts2 = Object.values(freq2).sort((a, b) => a - b)

    for (let i = 0; i < counts1.length; i++) {
        if (counts1[i] !== counts2[i]) {
            return false
        }
    }

    return true
};