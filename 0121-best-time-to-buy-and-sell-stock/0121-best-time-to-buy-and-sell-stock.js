/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minPrice = Infinity
    let maxProfit = 0

    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price
        } else {
            const profit = price - minPrice
            if (profit > maxProfit) {
                maxProfit = profit
            }
        }
    }

    return maxProfit
};