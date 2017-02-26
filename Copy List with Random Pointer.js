/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
    
    if(!head){
        return null;
    }
    
    var hashmap = new Map();
    var newArr = [];
    var node = head;
    
    while(node){
        hashmap.set(node, newArr.length);
        newArr.push(new RandomListNode(node.label));
        node = node.next;
    }
    
    node = head;
    for(let i = 0, len = newArr.length; i < len; i++){
        if(i !== len - 1){
            newArr[i].next = newArr[i+1];
        }
        
        let random = node.random;
        let index = hashmap.get(random);
        if(index !== undefined){
            newArr[i].random = newArr[index];
        }
        
        node = node.next;
    }
    return newArr[0];
};
