/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if(head === null || head.next === null){
        return null;
    }
    
    var fast = head;
    var slow = head;
    
    while(fast.next !== null && fast.next.next !== null){
        fast = fast.next.next;
        slow = slow.next;
        if(fast === slow){
            fast = head;
            while(fast !== slow){
                fast = fast.next;
                slow = slow.next;
            }
            return fast;
        }
    }
    
    return null;
};
