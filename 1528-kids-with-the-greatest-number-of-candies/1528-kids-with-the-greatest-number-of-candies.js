/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    if (candies.length === 0) return []
    if (candies.length === 1) return [true]

    let max = candies[0]
    const res = []

    for (const kid of candies) {
        max = Math.max(kid, max)
    }

    for (const kid of candies) {
        if (kid + extraCandies >= max) {
            res.push(true)
        } else {
            res.push(false)
        }
    }

    return res
};