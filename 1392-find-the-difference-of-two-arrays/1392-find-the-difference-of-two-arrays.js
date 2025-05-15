/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    const answer = [[], []]

    for (const num of nums1) {
        if (!nums2.includes(num)
            && !answer[0].includes(num)) {
            answer[0].push(num)
        }
    }

    for (const num of nums2) {
        if (!nums1.includes(num)
            && !answer[1].includes(num)) {
            answer[1].push(num)
        }
    }

    return answer
};