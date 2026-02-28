/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const stack = []

    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === '+') {
            const x = stack.pop()
            const y = stack.pop()
            stack.push(x + y)
            continue
        }

        if (tokens[i] === '-') {
            const x = stack.pop()
            const y = stack.pop()
            stack.push(y - x)
            continue
        }

        if (tokens[i] === '*') {
            const x = stack.pop()
            const y = stack.pop()
            stack.push(x * y)
            continue
        }

        if (tokens[i] === '/') {
            const x = stack.pop()
            const y = stack.pop()
            stack.push(Math.trunc(y / x))
            continue
        }

        stack.push(Number(tokens[i]))
    }

    return stack.pop()
};