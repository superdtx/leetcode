/**
Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
For example:
Given the following binary tree,
   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
You should return [1, 3, 4].
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    
    var queue = [];
    var res = [];
    
    if(!root){
        return res;
    }

    queue.push(root);
    
    while(queue.length){
        
        //How many node for one level
        var len = queue.length;
        
        for(var i = 0; i<len; i++){
            var node = queue.shift();
            
            if(i === 0){
                res.push(node.val);
            }
            
            node.right && queue.push(node.right);
            node.left && queue.push(node.left);
            
        }
    }
    
    return res;
};
