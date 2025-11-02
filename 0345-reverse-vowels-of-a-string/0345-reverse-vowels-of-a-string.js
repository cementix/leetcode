/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = 'aeiou'
    const letters = []
    let res = ''

    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i].toLowerCase())) {
            letters.push(s[i])
        }
    }

    letters.reverse()

    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i].toLowerCase())) {
            res += letters.shift()
        } else {
            res += s[i]
        }
    }

    return res
};