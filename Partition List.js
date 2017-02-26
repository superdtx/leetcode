/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if(head === null || head.next === null){
        return head;
    }
    
    var dummy1 = new ListNode(0);
    var dummy2 = new ListNode(0);
    var p1 = dummy1;
    var p2 = dummy2;
    var p = head;
    
    while(p){
        if(p.val < x){
            p1.next = p;
            p1 = p1.next;
        } else {
            p2.next = p;
            p2 = p2.next;
        }
        
        p = p.next;
    }
    
    p1.next = dummy2.next;
    p2.next = null;
    
    return dummy1.next;
};
