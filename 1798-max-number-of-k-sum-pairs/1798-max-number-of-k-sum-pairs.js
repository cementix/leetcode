var maxOperations = function(nums, k) {
    const cnt = new Map()
    let ops = 0

    for (const x of nums) {
        const need = k - x
        const c = cnt.get(need) || 0

        if (c > 0) {
            cnt.set(need, c - 1)
            ops++
        } else {
            cnt.set(x, (cnt.get(x) || 0) + 1)
        }
    }

    return ops
};