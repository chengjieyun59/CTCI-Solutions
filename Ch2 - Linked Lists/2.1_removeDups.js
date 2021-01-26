const { LinkedList } = require('./linkedList')
/**
 * Remove duplicates in a linked list.
 * @param {LinkedList} list 
 */
// O(n) time, O(n) space, use a set
const removeDups = head => {
  const s = new Set()
  let prev = null
  let curr = head
  while (curr) {
    if (s.has(curr.value)) {
      prev.next = curr.next
    } else {
      s.add(curr.value)
      prev = curr
    }
    curr = curr.next
  }
  return head
}

// O(n^2) time, O(1) space, 2-pointer approach
const removeDups = head => {
  for (let p1 = head; p1; p1 = p1.next) {
    for (let p2prev = p1, p2 = p1.next; p2; p2 = p2.next) {
      if (p1.value === p2.value) {
        p2prev.next = p2.next
      } else {
        p2prev = p2
      }
    }
  }
  return head
}

const l1 = removeDups(new LinkedList([5, 3, 4, 2, 1]).head)
console.log(l1, l1.next.next.next) // 5->3->4->2->1->null
const l2 = removeDups(new LinkedList([5, 3, 5, 3, 5, 5, 4]).head)
console.log(l2) // 5->3->4->null
const l3 = removeDups(new LinkedList([1, 1, 1, 1, 2, 2]).head)
console.log(l3) // 1->2->null
const l4 = removeDups(new LinkedList([8]).head)
console.log(l4) // 8->null
const l5 = removeDups(new LinkedList().head)
console.log(l5) // null
