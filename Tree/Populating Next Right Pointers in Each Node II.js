/**
Follow up for problem "Populating Next Right Pointers in Each Node".
What if the given tree could be any binary tree? Would your previous solution still work?
Note:
You may only use constant extra space.
For example,
Given the following binary tree,
         1
       /  \
      2    3
     / \    \
    4   5    7
After calling your function, the tree should look like:
         1 -> NULL
       /  \
      2 -> 3 -> NULL
     / \    \
    4-> 5 -> 7 -> NULL
Subscribe to see which companies asked this question
*/

/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

//bfs level-order traversal
/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    if(!root){
        return;
    }
    
    var queue = [{node: root, step: 0}];
    
    while(queue.length){
        var item = queue.shift();
        var node = item.node;
        var step = item.step;
        
        node.left && queue.push({node: node.left, step: step+1});
        node.right && queue.push({node: node.right, step: step+1});
        
        queue.length && (step === queue[0].step) && (node.next = queue[0].node);
    }
};
