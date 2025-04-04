/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const len = Math.min(word1.length, word2.length);
    let res = '';

    for (let i = 0; i < len; i++) {
        res += word1[i]
        res += word2[i]
    }

    if (word1.length !== word2.length) {
        let bigger
        const diff = Math.max(word1.length, word2.length) - len

        if (word1.length > word2.length) {
            bigger = word1
        } else {
            bigger = word2
        }

        for (let i = bigger.length - diff; i < bigger.length; i++) {
            res += bigger[i]
        }
    }

    return res
};