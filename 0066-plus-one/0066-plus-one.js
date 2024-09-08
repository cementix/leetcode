/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits[digits.length - 1] += 1

        for (let i = digits.length - 1; i >= 0; i--) {
                if (digits[i] === 10) {
                    digits[i] = 0
                    if (!!digits[i - 1]) {
                        digits[i - 1] += 1
                    } else {
                        digits.unshift(1)
                    }
                } else {
                    break
                }
        }
    
    return digits
    

};