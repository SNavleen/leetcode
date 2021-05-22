// https://leetcode.com/problems/design-linked-list/
const Node = function (val = null, prev = null, next = null) {
  this.val = val;
  this.prev = prev;
  this.next = next;
}

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
  this.len = 0;
  this.head = new Node();
  this.tail = new Node();

  this.head.next = this.tail;
  this.tail.prev = this.head;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (this.len === 0 || this.len < index) return -1;

  let currNode = this.head.next;
  while (index--) currNode = currNode.next;

  if (currNode.val === null) return -1;
  return currNode.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  this.len++;
  const nextNode = this.head.next;
  const node = new Node(val, this.head, nextNode);
  this.head.next = node;
  nextNode.prev = node;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  this.len++;
  const prevNode = this.tail.prev;
  const node = new Node(val, prevNode, this.tail);
  this.tail.prev = node;
  prevNode.next = node;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || this.len < index) return;

  this.len++;
  if (index === 0) return this.addAtHead(val);
  if (index === this.len) return this.addAtTail(val);

  let currNode = this.head;
  while (index--) currNode = currNode.next;
  const node = new Node(val, currNode, currNode.next);
  currNode.next = node;
  node.next.prev = node;
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (this.len <= index || index < 0) return;

  this.len--;
  let currNode = this.head.next;
  while (index--) currNode = currNode.next;

  let nextNode = currNode.next;
  let prevNode = currNode.prev;
  nextNode.prev = prevNode;
  prevNode.next = nextNode;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */