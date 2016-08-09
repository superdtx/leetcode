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
var swapPairs = function(head) {
    
    if(head === null || head.next === null){
        return head;
    }
    
    var dummy = new ListNode(0);
    var cur = dummy;
    dummy.next = head;
    
    var n, nn;
    
    while(cur && cur.next && cur.next.next) {
        n = cur.next;
        nn = cur.next.next;
        cur.next = nn;
        n.next = nn.next;
        nn.next = n;
        
        cur = cur.next.next;
    }
    
    return dummy.next;
};
