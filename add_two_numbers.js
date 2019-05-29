/* eslint-disable no-param-reassign */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const getValue = (l1, l2) => {
  let tempValue = 0;
  tempValue += l1 && l1.val ? l1.val : 0;
  tempValue += l2 && l2.val ? l2.val : 0;
  return tempValue;
};

const updateCurrent = (value, current, isNext) => {
  value += current.val;
  const shouldCarryOver = value >= 10;
  value %= 10;
  current.val = value;
  if (shouldCarryOver) {
    current.next = new ListNode(1);
    return current.next;
  }
  if (isNext) {
    current.next = new ListNode(0);
    return current.next;
  }
};

const addTwoNumbers = function(l1, l2) {
  const head = new ListNode(0);
  let current = head;
  while ((l1 && l1.next) || (l2 && l2.next)) {
    current = updateCurrent(getValue(l1, l2), current, true);
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  updateCurrent(getValue(l1, l2), current);
  return head;
};

var test = new ListNode(1);

var test2 = new ListNode(9);
test2.next = new ListNode(9);

console.log(addTwoNumbers(test, test2))