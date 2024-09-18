/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const uniqueNums = new Set(nums);  // Множество уникальных чисел
    let sumUnique = 0;  // Сумма уникальных чисел
    let sumAll = 0;  // Сумма всех чисел

    // Считаем сумму всех уникальных чисел
    for (let num of uniqueNums) {
        sumUnique += num;
    }

    // Считаем сумму всех чисел
    for (let num of nums) {
        sumAll += num;
    }

    // Используем формулу: 2 * (сумма уникальных) - (сумма всех)
    return 2 * sumUnique - sumAll;
};
