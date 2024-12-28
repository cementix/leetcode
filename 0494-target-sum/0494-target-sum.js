/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
    let sum = 0

    for (const num of nums) {
        sum += num
    }

    if ((target + sum) % 2 !== 0 || (target + sum) < 0) return 0;

    const sumP = (target + sum) / 2

    const dp = Array(sumP + 1).fill(0)
    dp[0] = 1

    for (const num of nums) {
        for (let j = sumP; j >= num; j--) {
            dp[j] += dp[j - num];
        }
    }

    return dp[sumP]
};