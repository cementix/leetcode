/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const numbers = []

    for (let i = 0; i < tokens.length; i++) {
        if (!isNaN(Number(tokens[i]))) {
            numbers.push(Number(tokens[i]))
        }

        if (tokens[i] === '+') {
            const number1 = numbers.pop()
            const number2 = numbers.pop()
            numbers.push(number2 + number1)
        }

        if (tokens[i] === '-') {
            const number1 = numbers.pop()
            const number2 = numbers.pop()
            numbers.push(number2 - number1)
        }

        if (tokens[i] === '*') {
            const number1 = numbers.pop()
            const number2 = numbers.pop()
            numbers.push(number2 * number1)
        }

        if (tokens[i] === '/') {
            const number1 = numbers.pop()
            const number2 = numbers.pop()
            numbers.push(Math.trunc(number2 / number1))
        }
    }

    return numbers.pop()
};