/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
  const indices = []
  
  for (let i = 0; i < words.length; i++) {
      if (words[i].split('').includes(x)) {
          indices.push(i)
      }
  }
    
    return indices
};