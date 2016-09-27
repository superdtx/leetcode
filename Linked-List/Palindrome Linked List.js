/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head || !head.next){
        return true;
    }
    
    //find middle node
    var fast = head;
    var slow = head;
    
    while(fast && fast.next && fast.next.next){
        fast = fast.next.next;
        slow = slow.next;
    }

    //reverse last part of linked list
    var prev = null;
    slow = slow.next;
    while(slow){
        var temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }
    
    //compare two linked list
    while(head !== null && prev !== null){
        if(head.val !== prev.val){
            return false;
        }
        head = head.next;
        prev = prev.next;
    }
    
    return true;
};
