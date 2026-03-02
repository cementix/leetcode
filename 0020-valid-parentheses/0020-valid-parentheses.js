/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = []

    for (const char of s) {
        if (char === '(') {
            stack.push(char)
        }
        if (char === '{') {
            stack.push(char)
        }
        if (char === '[') {
            stack.push(char)
        }

        if (char === ')') {
            if (stack[stack.length - 1] !== '(') return false
            stack.pop()
        }
        if (char === '}') {
            if (stack[stack.length - 1] !== '{') return false
            stack.pop()
        }
        if (char === ']') {
            if (stack[stack.length - 1] !== '[') return false
            stack.pop()
        }
    }

    if (stack.length) return false

    return true
};