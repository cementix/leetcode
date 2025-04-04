/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let res = '';
    const minLen = Math.min(word1.length, word2.length);

    for (let i = 0; i < minLen; i++) {
        res += word1[i] + word2[i];
    }

    res += word1.slice(minLen) + word2.slice(minLen);
    return res;
};