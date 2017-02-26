/**
 * Given a binary tree, return the bottom-up level
 * order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    var height = getHeight(root);
    if(height === 0){
        return [];
    }
    var result = [];
    for(var i=0; i<height; i++){
        result.push([]);
    }
    
    reverseRetrival(root, result, height-1);
    return result;
};

function reverseRetrival(root, result, level){
    if(root === null){
        return;
    }
    
    result[level].push(root.val);
    reverseRetrival(root.left, result, level-1);
    reverseRetrival(root.right, result, level-1);
}

function getHeight(root){
    if(root === null){
        return 0;
    }
    var left = getHeight(root.left);
    var right = getHeight(root.right);
    return Math.max(left, right)+1;
}
