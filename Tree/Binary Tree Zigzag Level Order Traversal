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
var zigzagLevelOrder = function(root) {
    
    var height = getHeight(root);
    if(height === 0){
        return [];
    }
    
    var result = [];
    for(var i = 0; i<height; i++){
        result.push([]);
    }
    
    zigzagRetrival(root, 0, result);
    
    return result;
};

function zigzagTraversal(root, level, result){
    
    if(root === null){
        return;
    }
    
    if(level%2){
        result[level].unshift(root.val);
    } else {
        result[level].push(root.val);
    }
    
    zigzagRetrival(root.left, level+1, result);
    zigzagRetrival(root.right, level+1, result);
}

function getHeight(root){
    if(root === null){
        return 0;
    }
    
    var left = getHeight(root.left);
    var right = getHeight(root.right);
    
    return Math.max(left, right)+1;
}
