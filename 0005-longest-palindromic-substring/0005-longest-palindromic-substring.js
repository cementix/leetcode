/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length < 2) return s
    let start = 0, maxLength = 1
    
    const expandAroundCenter = (left, right) => {
        while (s[left] === s[right] && left >= 0 && right < s.length) {
            if (right - left + 1 > maxLength) {
                start = left
                maxLength = right - left + 1
            }
            
            left -= 1
            right += 1
        }
    }
    
    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i - 1, i + 1)
        expandAroundCenter(i, i + 1)
    }
    
    return s.substring(start, start + maxLength)
}
