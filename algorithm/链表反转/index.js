const reverseList = function(head) {
  let node1 = null;
  let node2 = head;
  if(!node2) {
      return head;
  }
  while(node2) {
      const n = node2.next;
      node2.next = node1;
      node1 = node2;
      node2 = n;
  }
  head = node1;
  return head;
};