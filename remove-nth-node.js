/**
 * Definition for singly-linked list.

 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

function ListNode(val) {
  return {
    val,
    next: null,
  };
}

const moveRight = function(node, n) {
  for (let index = 1; index <= n + 1; index++) {
    node = node.next;
  }
  return node;
};

const removeNthFromEnd = function(head, n) {
  const returnNode = ListNode(0);
  returnNode.next = head;
  let left = returnNode;
  let right = returnNode;
  right = moveRight(head, n);
  while (right) {
    left = left.next;
    right = right.next;
  }
  left.next = left.next.next;
  return returnNode.next;
};
