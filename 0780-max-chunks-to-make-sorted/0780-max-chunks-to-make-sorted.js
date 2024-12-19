/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    let maxSeen = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        maxSeen = maxSeen < arr[i] ? arr[i] : maxSeen
        if (maxSeen === i) count++
    }

    return count
};