/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (num.toString().length === 1) return num

    let res = 0
    for (const dig of num.toString()) {
        res += +dig
    }

    return addDigits(res)
};