/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    let sum = 0
    let vowels = 'aeiou'

    for (let i = 0; i < k; i++) {
        if (vowels.includes(s[i])) {
            sum += 1
        }
    }

    let maxSum = sum

    for (let i = k; i < s.length; i++) {
        if (vowels.includes(s[i - k])) {
            sum -= 1
        }

        if (vowels.includes(s[i])) {
            sum += 1
        }

        maxSum = Math.max(sum, maxSum)
    }

    return maxSum
};