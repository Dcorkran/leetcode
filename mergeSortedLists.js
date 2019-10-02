/**
 * Definition for singly-linked list.

 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// create the return list pointer
// check both node values
// if values are same, add both
// if one value is ! - add other

const mergeTwoLists = function(l1, l2) {
    if (!l1 && !l2) {
        return l1
    }
    if ((l1 && !l2) || (l1 && l2 && l1.val < l2.val)) {
        returnNodeHead = {...l1};
        l1 = l1.next;
    } else {
        returnNodeHead = {...l2};
        l2 = l2.next;
    }
    let returnNode = returnNodeHead
    let isDone = false;
    while (!isDone) {
        if ((l1 && !l2) || (l1 && l2 && l1.val < l2.val)) {
            returnNode.next = {...l1};
            returnNode = returnNode.next;
            l1 = l1.next;
        } else if ((l2 && !l1) || (l1 && l2 && l2.val < l1.val)) {
            returnNode.next = {...l2};
            returnNode = returnNode.next;
            l2 = l2.next;
        } else if (l1 && l2 && l1.val === l2.val) {
            returnNode.next = {...l2};
            returnNode.next.next = {...l1};
            returnNode = returnNode.next.next;
            l1 = l1.next
            l2 = l2.next
        } else {
            isDone = true;
        }
    }
    return returnNodeHead;
};
