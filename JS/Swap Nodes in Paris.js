/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    
   if (!head)
    return null;
  
  var arr = [];
  var i;

  while (head) {
    var next = head.next;
    head.next = null;
    arr.push(head);
    head = next;
  } 

  var len = arr.length;

  for (i = 0; i < len; i+= 2) {
    var a = arr[i];
    var b = arr[i + 1];

    if (!b)
      continue;

    arr[i] = b;
    arr[i + 1] = a;
  }

  for (i = 0; i < len - 1; i++){
    arr[i].next = arr[i + 1];
  }

  return arr[0];
};
