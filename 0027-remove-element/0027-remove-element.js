/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let write = 0
    let curr = 0

    while (curr < nums.length) {
        if (nums[curr] !== val) {
            nums[write] = nums[curr]
            write++
        }
        curr++
    }

    return write
};