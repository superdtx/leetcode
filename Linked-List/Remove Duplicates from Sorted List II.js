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
var deleteDuplicates = function(head) {
    
    var dummy = new ListNode(0);
    dummy.next = head;
    var prev = dummy;
    var node = head;

    while(node&&node.next){
        if(node.val === node.next.val){
            var val = node.val;
            var n = node.next.next;
            while(n){
                if(n.val != val){
                    break;
                }
                n = n.next;
            }
            prev.next = n;
            node = n;
        } else {
            prev = node;
            node = node.next;
        }
    }
    
    return dummy.next;
};
