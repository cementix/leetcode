/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for (let l = 0, r = 0; r < nums.length; r++) {
        if (nums[r] !== 0) {
            const temp = nums[l]
            nums[l] = nums[r]
            nums[r] = temp
            l++
        }
    }
};