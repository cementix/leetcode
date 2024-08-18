/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let nodes = new Set();
    
    // Проходим по первому списку и сохраняем все узлы в Set
    let currentA = headA;
    while (currentA !== null) {
        nodes.add(currentA);
        currentA = currentA.next;
    }

    // Проходим по второму списку и проверяем, есть ли узел в Set
    let currentB = headB;
    while (currentB !== null) {
        if (nodes.has(currentB)) {
            return currentB; // Возвращаем точку пересечения
        }
        currentB = currentB.next;
    }

    return null; // Если пересечения нет
};