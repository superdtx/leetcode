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

// Solution O(1) space
//因为inorder traversal 叶子的值会越来越大
//所以存储前驱叶子 使之与现在的叶子进行比较
var recoverTree = function(root) {
    
    let array = [];
    
    inorderTraverse(root, array);
    
    let node1 = array[1];
    let node2 = array[2];
    
    let temp = node1.val;
    node1.val = node2.val;
    node2.val = temp;
    
};

function inorderTraverse(root, array){
    if(!root){
        return;
    }
    
    inorderTraverse(root.left, array);
    
    if(array[0] && array[0].val > root.val){
        if(!array[1]) {
            array[1] = array[0];
            array[2] = root;
        } else {
            array[2] = root;
        }
    }
    
    array[0] = root;
    
    inorderTraverse(root.right, array);
}
