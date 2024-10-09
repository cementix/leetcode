/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let starting = 0
    let pointer = 0
    let total = 0

    let totalGas = 0
    let totalCost = 0

    while(pointer < cost.length) {
        total += gas[pointer]
        total -= cost[pointer]

        totalGas += gas[pointer]
        totalCost += cost[pointer]

        if (total < 0) {
            starting = pointer + 1
            total = 0
        }
        pointer++
    }
 
    return totalGas >= totalCost ? starting : -1;
};