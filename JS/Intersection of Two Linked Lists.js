/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    
    var nodeA = headA;
    var nodeB = headB;
    var lenA = 0;
    var lenB = 0;
    
    while(nodeA){
        nodeA = nodeA.next;
        lenA++;
    }
    
    while(nodeB){
        nodeB = nodeB.next;
        lenB++;
    }
    
    nodeA = headA;
    nodeB = headB;
    var n = Math.abs(lenA - lenB);
    if(lenA > lenB) {
        while(n){
            nodeA = nodeA.next;
            n--;
        }
    } else {
        while(n){
            nodeB = nodeB.next;
            n--;
        }
    }
    
    while(nodeA !== nodeB) {
        nodeA = nodeA.next;
        nodeB = nodeB.next;
    }
    
    return nodeA;
};
