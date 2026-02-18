/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
   const set = new Set()

   for (x of nums) {
        if (!set.has(x)) set.add(x)
   }

   const res = []

   for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) res.push(i)
   }

   return res
};