/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const symList = [
        ["I", 1], ["IV", 4], ["V", 5], ["IX", 9],
        ["X", 10], ["XL", 40], ["L", 50], ["XC", 90],
        ["C", 100], ["CD", 400], ["D", 500], ["CM", 900],
        ["M", 1000]
    ];

    let res = ""

    for (let j = symList.length - 1; j >= 0; j--) {
        while (num >= symList[j][1]) {
            res += symList[j][0];
            num -= symList[j][1];
        }
    }

    return res

};