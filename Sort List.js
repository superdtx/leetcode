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
var sortList = function(head) {
    if(head === null || head.next === null){
        return head;
    }
    
    var fast = head;
    var slow = head;
    
    while(fast && fast.next && fast.next.next){
        fast = fast.next.next;
        slow = slow.next;
    }
    
    fast = slow.next;
    slow.next = null;
    
    var p1 = sortList(head);
    var p2 = sortList(fast);
    
    return merge(p1, p2);
};

function merge(p1, p2){
    
    if(!p1 && !p2){
        return null;
    } else if (!p1) {
        return p2;
    } else if (!p2) {
        return p1;
    }
    
    var dummy = new ListNode(0);
    var cur = dummy;
    
    while(p1 && p2){
        if(p1.val > p2.val){
            cur.next = p2;
            p2 = p2.next;
        } else {
            cur.next = p1;
            p1 = p1.next;
        }
        
        cur = cur.next;
    }
    
    if(p1){
        cur.next = p1;
    } else {
        cur.next = p2;
    }
    
    return dummy.next;
}
