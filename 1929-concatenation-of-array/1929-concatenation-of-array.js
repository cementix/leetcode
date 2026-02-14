/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let k = 0
    const res = [...nums]

    while (k < nums.length) {
        res.push(nums[k])
        k++
    }

    return res
};