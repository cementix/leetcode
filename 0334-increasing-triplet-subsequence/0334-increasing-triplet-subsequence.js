/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let small = Infinity, mid = Infinity
    
    for (const x of nums) {
        if (x <= small) small = x
        else if (x <= mid) mid = x
        else return true
    }

    return false
};