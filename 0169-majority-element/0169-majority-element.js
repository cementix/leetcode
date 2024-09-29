// O(n) space
// O(n) memory

var majorityElement = function (nums) {
    const hash = {}
    let longest = { times: 0, number: 0 }

    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]]) {
            hash[nums[i]] += 1

        } else {
            hash[nums[i]] = 1
        }
        if (hash[nums[i]] > longest.times) {
            longest.times = hash[nums[i]]
            longest.number = nums[i]
        }
    }

    return longest.number
};