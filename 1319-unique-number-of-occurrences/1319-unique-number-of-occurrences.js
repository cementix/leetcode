/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const hash = {}

    for (const num of arr) {
        if (hash[num]) {
            hash[num]++
        } else {
            hash[num] = 1
        }
    }

    const set = new Set()

    for (const key in hash) {
        if (set.has(hash[key])) {
            return false
        } else {
            set.add(hash[key])
        }
    }

    return true
};