/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let j = 0

    while (nums[j] < target) {
        j++
    }

    return j
};