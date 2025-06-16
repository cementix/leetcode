/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let min = nums[0]
    let diff = -1

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > min) {
            diff = Math.max(diff, nums[i] - min)
        } else {
            min = nums[i]
        }
    }

    return diff
};