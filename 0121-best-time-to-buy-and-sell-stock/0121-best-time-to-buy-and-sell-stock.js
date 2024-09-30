/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let l = 0, r = 0, maxProfit = 0

    while (r < prices.length) {
        if (prices[l] > prices[r]) {
            l = r
        }

        if (prices[r] - prices[l] > maxProfit) {
            maxProfit = prices[r] - prices[l]
        }

        r++
    }

    return maxProfit
};