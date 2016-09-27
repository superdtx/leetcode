/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    var dummy = new ListNode(0);
    dummy.next = head;
    var cur = dummy;
    var count = 0;
    while(cur && cur.next){
        count++;
        cur = cur.next;
    }
    
    cur = dummy;
    for(var i = 0; i < count-n; i++){
        cur = cur.next;
    }
    
    if(!cur.next.next){
        cur.next = null;
    } else {
        cur.next = cur.next.next;
    }
    return dummy.next;
};
