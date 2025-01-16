/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var xorAllNums = function(nums1, nums2) {
    let xor1 = 0, xor2 = 0;
    
    for (const num of nums1) {
        xor1 ^= num;
    }
    
    for (const num of nums2) {
        xor2 ^= num;
    }
    
    const len1Odd = nums1.length % 2 !== 0;
    const len2Odd = nums2.length % 2 !== 0;
    
    return (len1Odd ? xor2 : 0) ^ (len2Odd ? xor1 : 0);
};
