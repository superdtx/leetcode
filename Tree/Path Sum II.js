/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    
    var resultArray = [];
    if(root === null){
        return resultArray;
    }
    
    DFS(root, sum, resultArray, 0, []);
    
    return resultArray;
};

var DFS = function(root, sum, resultArray, tempSum, tempArray) {

    if(root === null){
        return;
    }
    
    tempSum += root.val;
    tempArray.push(root.val);
    if(tempSum === sum && root.left === null && root.right === null){
        resultArray.push(tempArray);
        return;
    }
    
    DFS(root.left, sum, resultArray, tempSum, tempArray.concat());
    DFS(root.right, sum, resultArray, tempSum, tempArray.concat());
};
