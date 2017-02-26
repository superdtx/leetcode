/**
Given n, generate all structurally unique BST's (binary search trees) that store values 1...n.
For example,
Given n = 3, your program should return all 5 unique BST's shown below.
   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
confused what "{1,#,2,3}" means? > read more on how binary tree is serialized on OJ.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if(n===0){
        return [];
    }
    
    return generate(1, n);
};

var generate = function(start, end){
    
    var result = [];
    var left, right, node;
    
    if(start > end){
        return [null];
    }
    
    for(var i = start; i <= end; i++){
        
        left = generate(start, i-1);
        right = generate(i+1, end);
        
        for (var j = 0; j < left.length; j++){
            for (var k = 0; k < right.length; k++){
                node = new TreeNode(i);
                node.left = left[j];
                node.right = right[k];
                result.push(node);
            }
        }
    }
    return result;
};
