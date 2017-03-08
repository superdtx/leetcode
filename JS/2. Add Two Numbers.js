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
var addTwoNumbers = function(l1, l2) {
    
    var dummy = new ListNode(0);
    var p = dummy;
    var carry = 0;
    
    while(l1 || l2){
        var val = carry + (l1 ? l1.val:0) + (l2 ? l2.val:0);
        carry = Math.floor(val / 10);
        val = val % 10;
        p.next = new ListNode(val);
        p = p.next;
        if(l1){
            l1 = l1.next;
        }
        if(l2){
            l2 = l2.next;
        }
    }
    
    if(carry !== 0){
        p.next = new ListNode(carry);
        p = p.next;
    }
    
    return dummy.next;
    
};
