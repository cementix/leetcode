/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var minimizeXor = function (num1, num2) {
    let countOnesInB = num2.toString(2).split('1').length - 1

    let x = 0

    for (let i = 31; i >= 0; i--) {
        if (countOnesInB > 0 && (num1 & (1 << i))) {
            x |= (1 << i);
            countOnesInB--;
        }
    }

    for (let i = 0; i < 32; i++) {
        if (countOnesInB > 0 && !(x & (1 << i))) {
            x |= (1 << i);
            countOnesInB--;
        }
    }

    return x
};