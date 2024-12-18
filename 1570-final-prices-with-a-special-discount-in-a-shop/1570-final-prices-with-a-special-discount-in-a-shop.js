/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    const res = []

    for (let i = 0; i < prices.length; i++) {
        let discountFound = false;

        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] <= prices[i]) {
                res.push(prices[i] - prices[j])
                discountFound = true;
                break;
            }
        }

        if (!discountFound) {
            res.push(prices[i])
        }
    }

    return res
};
