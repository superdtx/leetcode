/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    
    if(head === null || head.next === null){
        return;
    }
    
    var fast = head;
    var slow = head;
    
    //找到二分节点
    while(fast && fast.next && fast.next.next){
        fast = fast.next.next;
        slow = slow.next;
    }
    
    fast = slow.next;
    slow.next = null;
    
    //翻转右半部分
    var dummy = new ListNode(0);
    while(fast) {
        var n = dummy.next;
        dummy.next = fast;
        var nn = fast.next;
        fast.next = n;
        fast = nn;
    }
    
    slow = head;
    fast = dummy.next;
    
    while(slow && fast){
        var n = slow.next;
        slow.next = fast;
        var nn = fast.next;
        fast.next = n;
        fast = nn;
        slow = n;
    }
};
