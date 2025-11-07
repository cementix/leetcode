var closeStrings = function (word1, word2) {
    const hash1 = {}
    const hash2 = {}

    for (let i = 0; i < word1.length; i++) {
        hash1[word1[i]] = (hash1[word1[i]] || 0) + 1
    }

    for (let i = 0; i < word2.length; i++) {
        hash2[word2[i]] = (hash2[word2[i]] || 0) + 1
    }

    const keys1 = Object.keys(hash1).sort()
    const keys2 = Object.keys(hash2).sort()

    if (keys1.length !== keys2.length) return false
    for (let i = 0; i < keys1.length; i++) {
        if (keys1[i] !== keys2[i]) return false
    }

    const arr1 = Object.values(hash1).sort((a, b) => a - b)
    const arr2 = Object.values(hash2).sort((a, b) => a - b)

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false
    }

    return true
};