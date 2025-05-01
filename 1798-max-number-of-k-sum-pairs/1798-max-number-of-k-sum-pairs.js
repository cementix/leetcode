/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let counter = 0
    const hash = {}

    for (const num of nums) {
        const need = k - num
        if (hash[need] > 0) {
            counter++
            hash[need]--
        } else {
            hash[num] = (hash[num] || 0) + 1
        }
    }

    return counter
};