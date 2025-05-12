/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let curr = 0
    let max = 0

    for (const el of gain) {
        curr = curr + el
        max = Math.max(curr, max)
    }

    return max
};