/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    const set1 = new Set()
    const set2 = new Set()
    const res = [[], []]

    for (const x of nums1) {
        if (!set1.has(x)) set1.add(x)
    }

    for (const x of nums2) {
        if (!set2.has(x)) set2.add(x)
    }

    for (const val of set1) {
        if (!set2.has(val)) res[0].push(val)
    }

    for (const val of set2) {
        if (!set1.has(val)) res[1].push(val)
    }

    return res
};