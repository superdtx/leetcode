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
var mergeTwoLists = function(l1, l2) {
    var dummy = new ListNode(0);
    var node = dummy;
    
    while(l1 && l2){
        var val1 = l1.val;
        var val2 = l2.val;
        
        if(val1 < val2){
            node.next = l1;
            node = l1;
            l1 = l1.next;
        } else {
            node.next = l2;
            node = l2;
            l2 = l2.next;
        }
    }
    
    if(l1 === null){
        node.next = l2;
    } else {
        node.next = l1;
    }
    
    return dummy.next;
};
