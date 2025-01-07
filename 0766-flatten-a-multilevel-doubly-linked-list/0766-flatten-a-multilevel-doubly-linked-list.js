/**
 * // Definition for a Node.
 * function Node(val, prev, next, child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    if (!head) return null; // Якщо список порожній, повертаємо null

    // Рекурсивна функція для обробки вузлів
    function flattenHelper(node) {
        let current = node;
        let last = null; // Змінна для збереження останнього вузла

        while (current) {
            const next = current.next; // Зберігаємо наступний вузол
            if (current.child) {
                // Якщо є дочірній список, обробляємо його
                const childHead = current.child;
                const childTail = flattenHelper(childHead); // Рекурсивно обробляємо child

                // З'єднуємо поточний вузол із дочірнім списком
                current.next = childHead;
                childHead.prev = current;

                // Якщо був вузол next, з'єднуємо його з кінцем дочірнього списку
                if (next) {
                    childTail.next = next;
                    next.prev = childTail;
                }

                // Очищаємо child, бо він інтегрований
                current.child = null;

                // Оновлюємо останній вузол
                last = childTail;
            } else {
                // Якщо дочірнього списку немає, просто рухаємося далі
                last = current;
            }

            current = next; // Переходимо до наступного вузла
        }

        return last; // Повертаємо останній вузол
    }

    flattenHelper(head); // Запускаємо рекурсію
    return head; // Повертаємо голову списку
};
