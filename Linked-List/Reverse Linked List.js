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
/**
 * recursive
 * 现在需要把A->B->C->D进行反转，可以先假设B->C->D已经反转好，
 * 已经成为了D->C->B,那么接下来要做的事情就是将D->C
 * ->B看成一个整体，让这个整体的next指向A，所以问题转化了反转B->C->D。那么，
 * 可以先假设C->D已经反转好，已经成为了D->C,那么接下来要做的事情就是将D
 * ->C看成一个整体，让这个整体的next指向B，所以问题转化了反转C->D。那么，
 * 可以先假设D(其实是D->NULL)已经反转好，已经成为了D(其实是head->D),
 * 那么接下来要做的事情就是将D(其实是head->D
 * )看成一个整体，让这个整体的next指向C，所以问题转化了反转D
 * 
 */
var reverseList = function(head) {
    
    if(head === null || head.next === null){
        return head;
    }
    
    var newHead = reverseList(head.next);

    head.next.next = head;
    head.next = null;
    
    return newHead;
};
