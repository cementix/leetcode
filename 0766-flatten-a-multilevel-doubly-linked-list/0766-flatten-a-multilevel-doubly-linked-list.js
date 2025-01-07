/**
 * // Definition for a _Node.
 * function _Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var flatten = function(head) {
    if (!head) return null

    const stack = []
    let current = head

    while (current) {
        if (current.child) {
            if (current.next) {
                stack.push(current.next)
            }

            current.next = current.child
            current.child.prev = current
            current.child = null
        }

        if (!current.next && stack.length > 0) {
            const newNode = stack.pop();
            current.next = newNode;
            newNode.prev = current;
        }

        current = current.next
    }

    return head
};