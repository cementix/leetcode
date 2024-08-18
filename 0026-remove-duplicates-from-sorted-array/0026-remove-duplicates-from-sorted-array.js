/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let hash = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (hash.includes(nums[i])) {
            nums.splice(i, 1);
            i--
        } else {
            hash.push(nums[i]);
        }
    }
    
    return nums.length;
};