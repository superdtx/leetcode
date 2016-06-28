/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
 
 
//Solution O(n)
var recoverTree = function(root) {
    var array = [];
    treeToArray(root, array);
    
    var node1, node2;
    
    for(var i = 0; i < array.length - 1; i++){
        if(array[i][0] > array[i+1][0]){
            if(!node1){
                node1 = array[i][1];
                node2 = array[i+1][1];
            } else {
                node2 = array[i+1][1];
            }
        }
    }
    
    var temp = node1.val;
    node1.val = node2.val;
    node2.val = temp;
};

function treeToArray(root, array){
    if(!root){
        return;
    }
    
    treeToArray(root.left, array);
    array.push([root.val, root]);
    treeToArray(root.right, array);
}
