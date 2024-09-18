/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
  const indices = [];
  
  words.forEach((word, index) => {
      if (word.indexOf(x) !== -1) {
          indices.push(index);
      }
  });

  return indices;
};
