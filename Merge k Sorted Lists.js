/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(lists.length === 0){
        return null;
    }
    
    var len = lists.length;
    while(len > 1){
        var k = Math.floor((len+1)/2);
        for(var i = 0; i < Math.floor(len/2); i++){
            lists[i] = mergeTwoLists(lists[i], lists[i+k]);
        }
        len = k;
    }
    
    return lists[0];
};

function mergeTwoLists(l1, l2){
    var dummy = new ListNode(0);
    var node = dummy;
    
    while(l1&&l2){
        if(l1.val > l2.val){
            node.next = l2;
            l2 = l2.next;
        } else {
            node.next = l1;
            l1 = l1.next;
        }
        node = node.next;
    }
    
    if(l1){
        node.next = l1;
    } else if (l2) {
        node.next = l2;
    }
    
    return dummy.next;
}
