/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const set = new Set()
    let duplicate = -1
    let missing = -1

    for (let num of nums) {
        if (set.has(num)) {
            duplicate = num
        } else {
            set.add(num)
        }
    }

    for (let i = 1; i <= nums.length; i++) {
        if (!set.has(i)) {
            missing = i
            break
        }
    }

    return [duplicate, missing]
};