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
var levelOrder = function(root) {
    
    var height = getHeight(root);
    if(height === 0) {
        return [];
    }

    var result = [];
    for(var i = 0; i< height; i++){
        result.push([]);
    }
    
    retrival(root, result, 0);
    return result;
};

function retrival(root, result, level){
    if(root === null){
        return;
    }
    result[level].push(root.val);
    retrival(root.left, result, level+1);
    retrival(root.right, result, level+1);
}

function getHeight(root) {
    if(root === null){
        return 0;
    }
    var left = getHeight(root.left);
    var right = getHeight(root.right);
    return Math.max(left, right) + 1;
}
