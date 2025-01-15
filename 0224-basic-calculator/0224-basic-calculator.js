/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let stack = []
    let currentNumber = 0
    let currentResult = 0
    let sign = 1

    for (let i = 0; i < s.length; i++) {
        const char = s[i]

        if (!isNaN(char) && char !== ' ') {
            currentNumber = currentNumber * 10 + parseInt(char);
        } else if (char === '+') {
            currentResult += sign * currentNumber
            sign = 1
            currentNumber = 0
        } else if (char === '-') {
            currentResult += sign * currentNumber
            sign = -1
            currentNumber = 0
        } else if (char === '(') {
            stack.push(currentResult)
            stack.push(sign)
            currentResult = 0
            sign = 1
        } else if (char === ')') {
            currentResult += sign * currentNumber
            currentResult *= stack.pop()
            currentResult += stack.pop()
            currentNumber = 0
        }
    }

    currentResult += sign * currentNumber;

    return currentResult;
};