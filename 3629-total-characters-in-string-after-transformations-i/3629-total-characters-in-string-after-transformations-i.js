/**
 * @param {string} s
 * @param {number} t
 * @return {number}
 */
var lengthAfterTransformations = function (s, t) {
    const mod = 1e9 + 7;

    let letterCounts = new Array(26).fill(0);

    for (const char of s) {
        const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
        letterCounts[index]++
    }

    for (let step = 0; step < t; step++) {
        const newCounts = new Array(26).fill(0);

        newCounts[0] = letterCounts[25] % mod;
        newCounts[1] = (letterCounts[0] + letterCounts[25]) % mod;

        for (let i = 2; i < 26; i++) {
            newCounts[i] = letterCounts[i - 1] % mod;
        }

        letterCounts = newCounts

    }

    return letterCounts.reduce((sum, count) => (sum + count) % mod, 0)
};