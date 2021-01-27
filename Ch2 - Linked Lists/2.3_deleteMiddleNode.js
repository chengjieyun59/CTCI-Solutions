const { Node, LinkedList } = require('./linkedList')

/**
 * Delete a node somewhere in the middle (not the first or last node)
 * of a singly linked list, given only the access to the node.
 * @param {Node} node 
 */
const deleteMiddleNode = node => {
  if (node) {
    node.value = node.next.value
    node.next = node.next.next
  }
}

const l = new LinkedList([24, 53, 74, 23, 58, 36])
let node = l.head.next
console.log(l.head) // 24->53->74->23->58->36->null
deleteMiddleNode(node)
console.log(l.head) // 24->53->23->58->36->null
