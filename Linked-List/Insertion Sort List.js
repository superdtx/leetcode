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
var insertionSortList = function(head) {
    if(head === null || head.next === null){
        return head;
    }
    
    var dummy = new ListNode(0);

    var cur = head;
    while(cur) {
        point = dummy;
        
        while(point.next && point.next.val <= cur.val){
            point = point.next;
        }
        
        var n = point.next;
        point.next = cur;
        
        cur = cur.next;
        point.next.next = n;
    }
    
    return dummy.next;
};
