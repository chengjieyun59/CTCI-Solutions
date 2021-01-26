class Node {
  constructor(value = 0) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(arr = []) {
    this.head = null

    for (let i = 0, curr; i < arr.length; i += 1) {
      const node = new Node(arr[i])
      if (i === 0) {
        this.head = curr = node
      } else {
        curr.next = node
        curr = curr.next
      }
    }
  }

  append(value) {
    const typeOfValueIsNode = typeof value === 'object' 
      && value.hasOwnProperty('value')
      && value.hasOwnProperty('next')
    if (!this.head) {
      this.head = typeOfValueIsNode ? value : new Node(value)
    } else {
      let curr = this.head
      while (curr && curr.next) {
        curr = curr.next
      }
      curr.next = typeOfValueIsNode ? value : new Node(value)
    }
  }
}

module.exports = {
  Node,
  LinkedList
}