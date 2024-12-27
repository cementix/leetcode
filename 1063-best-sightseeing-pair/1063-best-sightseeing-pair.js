/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function (values) {
    if (!values) return 0

    let max = 0
    let left = values[0]

    for (let i = 1; i < values.length; i++) {
        max = Math.max(max, left + values[i] - i)

        left = Math.max(left, values[i] + i)
    }

    return max
};