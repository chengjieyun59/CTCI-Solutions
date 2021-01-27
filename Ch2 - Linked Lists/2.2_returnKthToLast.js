const { LinkedList } = require('./linkedList')

/**
 * Find the kth to last element in a singly linked list.
 * Use two pointers,
 * first one has a head start of k iterations before the second one starts,
 * so that when the first pointer reaches the end,
 * the second pointer reaches kth-to-last element.
 * @param {LinkedList} list
 * @param {number} k
 */
const returnKthToLast = (head, k) => {
  let p1 = p2 = head
  while (k > 0 && p1) {
    p1 = p1.next
    k--
  }
  if (k > 0) return null
  while (p1) {
    p1 = p1.next
    p2 = p2.next
  }
  return p2.value
}

console.log(returnKthToLast(new LinkedList([37, 21, 34, 2, 1, 52, 64]).head, 1)) // 64
console.log(returnKthToLast(new LinkedList([37, 21, 34, 2, 1, 52, 64]).head, 2)) // 52
console.log(returnKthToLast(new LinkedList([37, 21, 34, 2, 1, 52, 64]).head, 7)) // 37
console.log(returnKthToLast(new LinkedList([37, 21, 34, 2, 1, 52, 64]).head, 100)) // null
