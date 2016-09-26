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
var oddEvenList = function(head) {
    
    var tail = head;
    var point = head;
    var len = 1;
    var i = 0;
    
    while(tail && tail.next){
        tail = tail.next;
        len ++;
    }
    
    while(i < Math.floor(len/2)){
        var temp = point.next;
        var nn = point.next.next;
        
        tail.next = temp;
        temp.next = null;
        tail = tail.next;

        nn && (point.next = nn);
        point = nn;
        
        i++;
    }
    
    return head;
};
