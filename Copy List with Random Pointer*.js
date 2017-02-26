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
    
    if(head === null){
        return null;
    }  
    
    var n;
    var p = head;
    while(p){
        var node = new RandomListNode(p.label);
        node.random = p.random;
        
        n = p.next;
        p.next = node;
        node.next = n;
        
        p = n;
    }
    
    p = head.next;
    while(p && p.next){
        if(p.random !== null){
            p.random = p.random.next;
        }
        p = p.next.next;
    }
    
    p = head;
    var dummy = new RandomListNode(0);
    var pn = dummy; //point to new list
    while(p) {
        n = p.next;
        
        pn.next = n;
        pn = n;
        
        var nn = n.next;
        p.next = n.next;
        p = n.next;
    }
    
    return dummy.next;
    
};
