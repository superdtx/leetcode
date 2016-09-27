/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    
    if(val === null){
        return head;
    }
    
    var dummy = new ListNode(0);
    dummy.next = head;
    var cur = dummy;
    
    while (cur.next){
        if(cur.next.val === val){
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return dummy.next;
};
