/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let hash = new Set();
    
    for (let i = 0; i < nums.length; i++) {
        if (hash.has(nums[i])) {
            nums.splice(i, 1);
            i--
        } else {
            hash.add(nums[i]);
        }
    }
    
    return nums.length;
};