/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {

    return build(head, null);
};

function build(start, end){
    
    if(start === end){
        return null;
    }
    
    var fast = start;
    var slow = start;
    
    while(fast !== end && fast.next !== end){
        fast = fast.next.next;
        slow = slow.next;
    }
    
    var node = new TreeNode(slow.val);
    node.left = build(start, slow);
    node.right = build(slow.next, end);
    
    return node;
}
