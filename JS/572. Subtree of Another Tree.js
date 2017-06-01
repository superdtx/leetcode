/**
Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

Example 1:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
Given tree t:
   4 
  / \
 1   2
Return true, because t has the same structure and node values with a subtree of s.
Example 2:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
    /
   0
Given tree t:
   4
  / \
 1   2
Return false.
**/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    
    var stack = [s];
    
    while(stack.length > 0){
        var current = stack.pop();

        if(current.val === t.val){
            if(checkTrees(current, t)){
                return true;
            }
        }
        current.left !== null && stack.push(current.left);
        current.right !== null && stack.push(current.right);
    }
    
    return false;
};

var checkTrees = function(a, b){
    if(a === null && b === null){
        return true;
    } else if(a === null || b === null){
        return false;
    }
    
    if(a.val === b.val){
        var left = checkTrees(a.left, b.left);
        var right = checkTrees(a.right, b.right);
        return left && right;
    }
    
    return false;
};
