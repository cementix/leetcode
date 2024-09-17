/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    const words = s1.split(" ").concat(s2.split(" "));
    const count = {};
    
    // Count occurrences of each word
    words.forEach(word => {
        count[word] = (count[word] || 0) + 1;
    });
    
    // Filter words that appear exactly once
    return words.filter(word => count[word] === 1);
};
