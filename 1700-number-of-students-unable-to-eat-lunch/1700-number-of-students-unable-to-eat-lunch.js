/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let count1 = 0
    let count2 = 0

    for (let s of students) {
        if (s === 0) count1++
        else count2++
    }

    for (let s of sandwiches) {
        if (s === 0) {
            if (count1 === 0) break
            count1--
        } else {
            if (count2 === 0) break
            count2--
        }
    }

    return count1 + count2
};