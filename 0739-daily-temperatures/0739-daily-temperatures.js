/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const res = Array.from(temperatures).fill(0)
    const stack = []

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            const idx = stack.pop()
            res[idx] = Math.abs(idx - i)
        }
        stack.push(i)
    }

    return res
};