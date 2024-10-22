/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const hash = {}

    for (const letter of ransomNote) {
        if (hash[letter]) {
            hash[letter].ransomNote++
        } else {
            hash[letter] = {ransomNote: 1, magazine: 0}
        }
    }

    for (const letter of magazine) {
        if (hash[letter]) {
            hash[letter].magazine++
        } else {
            hash[letter] = {ransomNote: 0, magazine: 1}
        }
    }

    for (const letter of Object.keys(hash)) {
        if (hash[letter].ransomNote > hash[letter].magazine) {
            return false;
        }
    }

    return true
};