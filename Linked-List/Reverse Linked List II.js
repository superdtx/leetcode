/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    var prev, newTail, next;
    var i;
    var dummy = new ListNode(0);
    var cur = dummy;
    
    if(m === n || head === null || head.next === null){
        return head;
    }
    
    dummy.next = head;
    i = m - 1;
    
    while(i > 0){
        cur = cur.next;
        i--;
    }
    
    prev = cur;
    cur = cur.next;
    newTail = prev.next;
    
    prev.next = null;
    i = n - m;
    
    /**
     * 自己的next指向自己
     * 后面的node不断向前移
     */
    
    while(cur && i >= 0) {
        next = cur.next;
        cur.next = prev.next;
        prev.next = cur;
        cur = next;
        i--;
    }
    
    newTail.next = cur;
    return dummy.next;
};
