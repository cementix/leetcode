/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    const sorted = [...nums].sort((a, b) => a - b)
    const firstIndex = new Map()

    for (let i = 0; i < sorted.length; i++) {
        if (!firstIndex.has(sorted[i])) firstIndex.set(sorted[i], i)
    }

    return nums.map(x => firstIndex.get(x))
};