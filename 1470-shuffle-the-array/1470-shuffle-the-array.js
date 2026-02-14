/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const res = []
    let k = 0

    while (n < nums.length) {
        res.push(nums[k])
        res.push(nums[n])
        n++
        k++
    }

    return res
};