/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const hash = {}

    // Count letters in magazine
    for (const letter of magazine) {
        hash[letter] = (hash[letter] || 0) + 1;
    }

    // Check if ransomNote can be constructed from magazine
    for (const letter of ransomNote) {
        if (!hash[letter]) {
            return false;
        }
        hash[letter]--;
    }

    return true;
};
