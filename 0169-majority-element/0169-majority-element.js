/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let candidate = null
    let count = 0

    for (const n of nums) {
        if (count === 0) {
            candidate = n
        }

        count += (n === candidate) ? 1 : -1
    }

    return candidate
};