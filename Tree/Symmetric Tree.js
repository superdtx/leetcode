/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(root === null){
        return true;
    }
    
    return recursiveTraversal(root.left, root.right);
};

function recursiveTraversal(left, right){
    
    if(left===null && right===null){
        return true;
    } else if (left===null || right===null){
        return false;
    }
    
    var cond1=left.val===right.val;
    var cond2=recursiveTraversal(left.left, right.right);
    var cond3=recursiveTraversal(left.right, right.left);
    
    return cond1&&cond2&&cond3;
    
}

/**
 * iteratively
 */
var isSymmetric = function(root) {
    if(root === null){
        return true;
    }  
    
    var leftNode = root.left;
    var rightNode = root.right;
    
    if(!leftNode&&!rightNode){
        return true;
    }
    
    if((!leftNode&&rightNode)||(leftNode&&!rightNode)){
        return false;
    }
    
    var queue1 = [];
    var queue2 = [];
    
    queue1.push(leftNode);
    queue2.push(rightNode);
    while(queue1.length !== 0 && queue2.length !== 0){
        var temp1 = queue1[0];
        var temp2 = queue2[0];
        queue1.shift();
        queue2.shift();
        if((!temp1&&temp2)||(temp1&&!temp2)){
            return false;
        }
        if(temp1&&temp2){
            if(temp1.val !== temp2.val){
                return false;
            }
            queue1.push(temp1.left);
            queue1.push(temp1.right);
            queue2.push(temp2.right);
            queue2.push(temp2.left);
        }

    }
    return true;
};
