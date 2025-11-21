/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let write = 0
    let curr = 0

    while (curr < nums.length) {
        if (nums[curr] !== nums[write]) {
            write++
            nums[write] = nums[curr]
        }
        curr++
    }

    return write + 1
};