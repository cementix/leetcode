/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let l = nums.length
  for (let i = 0; i < l; i++) {
    for (let j = i + 1; j < l; j++) {
        if (nums[i] + nums[j] == target) {
            return [i, j]
        }
    }
  }  
};