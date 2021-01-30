const { Node, LinkedList } = require('./linkedList')

/**
 * 
 * @param {LinkedList} l1 
 * @param {LinkedList} l2 
 */
const sumLists = (l1, l2) => {
  let l3 = dummy = new Node()
  let carry = 0

  while (l1 || l2 || carry) {
    let sum = carry + (l1 ? l1.value : 0) + (l2 ? l2.value : 0)
    carry = Math.floor(sum / 10)
    l3.next = new Node(sum % 10)
    l1 = l1 ? l1.next : l1
    l2 = l2 ? l2.next : l2
    l3 = l3.next
  }

  return dummy.next
}

const sumListsForward = (l1, l2) => {
  let num1 = 0, num2 = 0
  while (l1) {
    num1 = num1 * 10 + l1.value
    l1 = l1.next
  }
  while (l2) {
    num2 = num2 * 10 + l2.value
    l2 = l2.next
  }
  let sum = num1 + num2
  let curr = head = null
  while (sum > 0) {
    head = new Node(sum % 10)
    head.next = curr
    curr = head
    sum = Math.floor(sum / 10)
  }
  return head
}

console.log(sumLists(new LinkedList([7, 1, 6]).head, new LinkedList([5, 9, 2]).head)) // 2->1->9->null
console.log(sumLists(new LinkedList([7, 1]).head, new LinkedList([5, 9]).head)) // 2->1->1->null
const l1 = sumLists(new LinkedList([9, 9, 8, 9]).head, new LinkedList([9]).head)
console.log(l1, l1.next) // 8->0->9->9->null

console.log(sumListsForward(new LinkedList([1, 6]).head, new LinkedList([5, 9, 2]).head)) // 6->0->8->null
console.log(sumListsForward(new LinkedList([7, 1]).head, new LinkedList([5, 9]).head)) // 1->3->0->null
const l2 = sumListsForward(new LinkedList([9, 9, 8, 9]).head, new LinkedList([9]).head)
console.log(l2, l2.next) // 9->9->9->8->null