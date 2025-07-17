/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findMin = (arr) => {
    let min = arr[0]
    let index = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
            index = i
        }
    }

    return { index, min }
}

var numberGame = function (nums) {
    const res = []

    while (nums.length > 0) {
        const alice = findMin(nums)
        nums.splice(alice.index, 1)

        const bob = findMin(nums)
        nums.splice(bob.index, 1)

        res.push(bob.min)
        res.push(alice.min)
    }

    return res
};