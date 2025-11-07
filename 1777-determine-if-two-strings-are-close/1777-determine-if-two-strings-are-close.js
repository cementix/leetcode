var closeStrings = function (word1, word2) {
    const hash1 = {}
    const hash2 = {}

    for (let i = 0; i < word1.length; i++) {
        hash1[word1[i]] = (hash1[word1[i]] || 0) + 1
    }

    for (let i = 0; i < word2.length; i++) {
        hash2[word2[i]] = (hash2[word2[i]] || 0) + 1
    }

    if (Object.keys(hash1).sort().join('') !== Object.keys(hash2).sort().join(''))
        return false

    if (Object.values(hash1).sort().join('') !== Object.values(hash2).sort().join(''))
        return false

    return true
};