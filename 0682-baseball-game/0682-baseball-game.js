/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    let score = 0
    const stack = []

    for (let i = 0; i < operations.length; i++) {
        if (!isNaN(Number(operations[i]))) {
            score += parseInt(operations[i])
            stack.push(parseInt(operations[i]))
        }

        if (operations[i] === '+') {
            const addition = stack[stack.length - 1] + stack[stack.length - 2]
            stack.push(addition)
            score += addition
        }

        if (operations[i] === 'D') {
            const addition = stack[stack.length - 1] * 2
            stack.push(addition)
            score += addition
        }

        if (operations[i] === 'C') {
            const removal = stack.pop()
            score -= removal
        }
    }

    return score
};