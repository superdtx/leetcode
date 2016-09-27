/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    
    var i, cur, next;
    var newHead = head;
    var dummy = new ListNode(0);

    for(i = 0; i < k; i++){
        if(newHead === null){
            return head;
        } 
        newHead = newHead.next;
    }
    
    newHead = reverseKGroup(newHead, k);
    
    cur = head;
    dummy.next = newHead;
    
    for(i = 0; i < k; i++){
        next = cur.next;
        cur.next = dummy.next;
        dummy.next = cur;
        cur = next;
    }
    
    return dummy.next;
};
