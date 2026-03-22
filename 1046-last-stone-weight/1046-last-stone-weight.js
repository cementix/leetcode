/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    while (stones.length > 1) {
        const x = popMax(stones)
        const y = popMax(stones)

        if (x === y) {
            continue
        } else {
            const res = Math.abs(x - y)
            stones.push(res)
        }
    }

    return stones[0] || 0
};

const popMax = (arr) => {
    const max = { num: arr[0], index: 0 }

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max.num) {
            max.num = arr[i]
            max.index = i
        }
    }

    return arr.splice(max.index, 1)[0];
}