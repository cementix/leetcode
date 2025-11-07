var findDifference = function (nums1, nums2) {
    const set1 = new Set(nums1)
    const set2 = new Set(nums2)

    const res = [[], []]

    for (const val of set1) {
        if (!set2.has(val)) res[0].push(val)
    }

    for (const val of set2) {
        if (!set1.has(val)) res[1].push(val)
    }

    return res
};