// Signle Link List data Structure
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}
class LinkList {
  constructor() {
    this.length = 0
  }
  push(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }
  pop() {
    if (!this.head) return undefined
    let temp = this.head
    let prv = this.head

    while (temp.next) {
      prv = temp
      temp = temp.next
    }
    this.tail = prv
    this.tail.next = null
    this.length--

    if (this.length == 0) {
      this.head = null
      this.tail = null
    }
    return temp
  }
  unshift(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
      this.length++
    }
    return this
  }
  shift() {
    if (!this.head) return
    let temp = this.head
    this.head = this.head.next
    temp.next = null
    this.length--
    if (this.length == 0) {
      this.tail = null
    }
    return temp
  }
  get(index) {
    if (index < 0 && index < this.length) return
    let temp = this.head
    for (let i = 0; i < index; i++) {
      temp = temp.next
    }
    return temp
  }
  set(index, value) {
    let temp = this.get(index)
    if (temp) {
      temp.value = value
      return true
    }
    return false
  }
  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 && index > this.length) return false;

    const newnode = new Node(value)
    let temp = this.get(index - 1)
    newnode.next = temp.next
    temp.next = newnode
    this.length++
  }

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();
    if (index < 0 && index > this.length) return false;
    const befor = this.get(index - 1)
    const temp = befor.next
    befor.next = temp.next
    temp.next = null
    this.length--
    return temp
  }

  reverse() {
    let temp = this.head
    this.head = this.tail
    this.tail = temp
    let next = temp.next
    let prev = null
    for (let i = 0; i < this.length; i++) {
      next = temp.next
      temp.next = prev
      prev = temp
      temp = next
    }
    return this
  }
}
let myLinkList = new LinkList()

// insert at the end 
myLinkList.push(4)
myLinkList.push(5)
myLinkList.push(7)
myLinkList.push(8)
myLinkList.push(9)
myLinkList.push(10)
// console.log(myLinkList.remove(1))
// console.log(myLinkList.get(3))


// Dubly Link List data Structure

class Dnode {
  constructor(value) {
    this.value = value;
    this.next = null
    this.prev = null
  }
}

class DlinkList {
  constructor(value) {
    const newNode = new Dnode(value)
    this.head = newNode;
    this.tail = this.head
    this.length = 1

  }
}

let myDLinkList = new DlinkList(5)
console.log(myDLinkList)

