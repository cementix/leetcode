/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
      const clean = word.trim();

  if (clean.length === 0) {
    return 'Enter a word here';
  }

  if (clean.includes(' ')) {
    return 'Enter one word at a time';
  };

  if (clean === clean.toUpperCase() || clean === clean.toLowerCase()) {
    return true;
  };

  if (clean[0] === clean[0].toUpperCase()
    && clean.slice(1) === clean.slice(1).toLowerCase()) {
    return true;
  };

  return false;
};