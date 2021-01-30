const { LinkedList } = require('./linkedList')

/**
 * Partition a linked list around a value x,
 * such that all nodes < x come before all nodes >= x.
 * If x is contained within the list, 
 * the values of x only need to be after the elements < x,
 * where between both partitions or in the right partition.
 * @param {LinkedList} list 
 * @param {number} x 
 */
const partition = (head, x) => {
  const left = new LinkedList()
  const right = new LinkedList()
  let curr = head
  while (curr) {
    if (curr.value < x) {
      left.append(curr.value)
    } else {
      right.append(curr.value)
    }
    curr = curr.next
  }
  left.append(right.head)
  return left
}

const l1 = partition(new LinkedList([3, 5, 8, 5, 10, 2, 1]).head, 5)
console.log(l1.head, l1.head.next.next, l1.head.next.next.next.next) // 3->2->1->5->8->5->10->null
const l2 = partition(new LinkedList([4]).head, 4)
console.log(l2.head) // 4->null
const l3 = partition(new LinkedList([5, 4, 5]).head, 5)
console.log(l3.head) // 4->5->5->null
