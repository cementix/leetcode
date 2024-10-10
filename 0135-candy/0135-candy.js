/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const arr = new Array(ratings.length).fill(1)

    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i - 1] < ratings[i]) {
            arr[i] = arr[i - 1] + 1
        }
    }

    for (let i = ratings.length - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            arr[i] = Math.max(arr[i], arr[i+1] + 1)
        }
    }

    return arr.reduce((a,b) => a + b, 0)
};