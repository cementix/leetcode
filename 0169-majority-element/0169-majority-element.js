// O(n) speed
// O(1) memory

var majorityElement = function (nums) {
    let longest = { times: 0, number: null }
    let pointer = 0

    nums.sort((a, b) => a - b)

    while (pointer < nums.length) {
        let count = 0

        while(nums[pointer] === nums[pointer + 1]) {
            count++
            pointer++
        }

        if (count >= longest.times) {
            longest.times = count
            longest.number = nums[pointer]
        }

        pointer++
    }

    return longest.number
};