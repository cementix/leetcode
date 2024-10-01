/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let goal = nums.length - 1
    let stepsNeeded = 1

    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] >= stepsNeeded) {
            goal--
            stepsNeeded = 1
        } else {
            stepsNeeded++
        }

        if (i === 0 && nums[i] < stepsNeeded) {
            return false
        }
    }

    return true
};