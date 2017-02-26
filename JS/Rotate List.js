/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    
    if(head === null || head.next === null){
        return head;
    }
    
    var p1 = head;
    var p2 = head;
    var len = 1;
    
    while(p1 && p1.next){
        p1 = p1.next;
        len++;
    }
    
    //转了多少圈 相当于原来位置 走了多少步
    k = k % len;
    
    if(k === 0 || len === 1){
        return head;
    }
    
    p1 = head;
    for(var i = 0; i < k; i++){
        p1 = p1.next;
    }
    
    while(p1 && p1.next){
        p1 = p1.next;
        p2 = p2.next;
    }
    
    var newHead = p2.next;
    p2.next = null;
    p1.next = head;
    
    return newHead;
};
