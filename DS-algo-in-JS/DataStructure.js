// Signle Link List data Structure
// class Nodev {
//   constructor(value) {
//     this.value = value
//     this.next = null
//   }
// }
// class LinkList {
//   constructor() {
//     this.length = 0
//   }
//   push(value) {
//     const newNode = new Nodev(value)
//     if (!this.head) {
//       this.head = newNode
//       this.tail = newNode
//     } else {
//       this.tail.next = newNode
//       this.tail = newNode
//     }
//     this.length++
//     return this
//   }
//   pop() {
//     if (!this.head) return undefined
//     let temp = this.head
//     let prv = this.head

//     while (temp.next) {
//       prv = temp
//       temp = temp.next
//     }
//     this.tail = prv
//     this.tail.next = null
//     this.length--

//     if (this.length == 0) {
//       this.head = null
//       this.tail = null
//     }
//     return temp
//   }
//   unshift(value) {
//     const newNode = new Nodev(value)
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode
//     } else {
//       newNode.next = this.head
//       this.head = newNode
//       this.length++
//     }
//     return this
//   }
//   shift() {
//     if (!this.head) return
//     let temp = this.head
//     this.head = this.head.next
//     temp.next = null
//     this.length--
//     if (this.length == 0) {
//       this.tail = null
//     }
//     return temp
//   }
//   get(index) {
//     if (index < 0 && index < this.length) return
//     let temp = this.head
//     for (let i = 0; i < index; i++) {
//       temp = temp.next
//     }
//     return temp
//   }
//   set(index, value) {
//     let temp = this.get(index)
//     if (temp) {
//       temp.value = value
//       return true
//     }
//     return false
//   }
//   insert(index, value) {
//     if (index === 0) return this.unshift(value);
//     if (index === this.length) return this.push(value);
//     if (index < 0 && index > this.length) return false;

//     const newnode = new Nodev(value)
//     let temp = this.get(index - 1)
//     newnode.next = temp.next
//     temp.next = newnode
//     this.length++
//   }

//   remove(index) {
//     if (index === 0) return this.shift();
//     if (index === this.length) return this.pop();
//     if (index < 0 && index > this.length) return false;
//     const befor = this.get(index - 1)
//     const temp = befor.next
//     befor.next = temp.next
//     temp.next = null
//     this.length--
//     return temp
//   }

//   reverse() {
//     let temp = this.head
//     this.head = this.tail
//     this.tail = temp
//     let next = temp.next
//     let prev = null
//     for (let i = 0; i < this.length; i++) {
//       next = temp.next
//       temp.next = prev
//       prev = temp
//       temp = next
//     }
//     return this
//   }
// }
// let myLinkList = new LinkList()

// insert at the end
// myLinkList.push(4)
// myLinkList.push(5)
// myLinkList.push(7)
// myLinkList.push(8)
// myLinkList.push(9)
// myLinkList.push(10)
// console.log(myLinkList.remove(1))
// console.log(myLinkList.get(3))


// Dubly Link List data Structure

// class Dnode {
//   constructor(value) {
//     this.value = value;
//     this.next = null
//     this.prev = null

//   }
// }

// class AddNode {
//   constructor(val) {
//     this.val = val
//     this.next = null
//   }
// }

// class Stackv {
//   constructor() {
//     this.length = 0
//   }
//   push(val) {
//     const newNode = new AddNode(val)
//     if (this.length === 0) {
//       this.top = newNode
//     } else {
//       newNode.next = this.top
//       this.top = newNode
//     }
//     this.length++
//     return this

//   }
//   pop() {
//     if (this.length === 0) return undefined
//     let popedNode = this.top;
//     this.top = this.top.next
//     popedNode.next = null
//     this.length--
//     return popedNode
//   }
// }

// let stack = new Stackv()
// stack.push(20)
// stack.push(30)
// stack.push(40)
// stack.push(50)

// console.log(stack.pop())

// console.log(stack)


// class BSTNode {
//   constructor(value) {
//     this.value = value
//     this.right = null;
//     this.left = null;
//   }
// }

// class BTS {
//   constructor() {
//     this.root = null
//   }
//   insert(val) {
//     let newNode = new BSTNode(val)
//     if (this.root == null) {
//       this.root = newNode
//       return this
//     }
//     let temp = this.root
//     while (true) {
//       if (newNode.value === temp.value) return false
//       if (newNode.value < temp.value) {
//         if (temp.left == null) {
//           temp.left = newNode
//           return
//         }
//         temp = temp.left
//       } else {
//         if (temp.right === null) {
//           temp.right = newNode
//           return
//         }
//         temp = temp.right
//       }
//     }
//   }
//   containes(val) {
//     if (this.root == null) return false
//     let temp = this.root;
//     while (temp) {
//       if (val < temp.value) temp = temp.left
//       else if (val > temp.value) temp = temp.right
//       else return true
//     }
//     return false
//   }
//   minValueNode(currVal) {
//     while (currVal.left != null) {
//       currVal = currVal.left
//     }
//     return currVal
//   }
// }

// let myBTS = new BTS()
// myBTS.insert(40)
// myBTS.insert(50)
// myBTS.insert(60)
// myBTS.insert(10)
// myBTS.insert(5)
// myBTS.insert(30)
// myBTS.insert(10)



// console.log(myBTS.minValueNode(myBTS.root))

// console.log(myBTS)


// Binary Search Tree Example No - 2

// class BTSNode {
//   constructor(val) {
//     this.val = val
//     this.left = null;
//     this.right = null;
//   }
// }

// class BunarySerachTree {
//   constructor() {
//     this.root = null;
//   }
//   // Inserting Itretivly
//   insertNodeI(val) {
//     let newNode = new BTSNode(val)
//     if (!this.root) {
//       this.root = newNode
//       return this
//     }
//     let curr = this.root
//     while (true) {
//       if (val === curr.val) return undefined
//       if (val < curr.val) {
//         if (!curr.left) {
//           curr.left = newNode
//           return this
//         }
//         curr = curr.left
//       } else {
//         if (!curr.right) {
//           curr.right = newNode
//           return this
//         }
//         curr = curr.right
//       }
//     }
//   }
//   // Inserting Recursivly
//   insertNodeR(val) {
//     let newNode = new BTSNode(val)
//     if (!this.root) {
//       this.root = newNode
//       return this
//     } else this.insert(this.root, newNode)
//   }
//   insert(root, newNode) {
//     // check if root and newNode is equel
//     if (root.val === newNode.val) return undefined
//     if (root.val > newNode.val) {
//       if (!root.left) root.left = newNode
//       else this.insert(root.left, newNode)
//     } else {
//       if (!root.right) root.right = newNode
//       else this.insert(root.right, newNode)
//     }
//   }
//   find(val) {
//     if (!this.root) return false
//     let curr = this.root
//     while (curr) {
//       if (val < curr.val) {
//         curr = curr.left
//       } else if (val > curr.val) {
//         curr = curr.right
//       } else {
//         return true
//       }
//     }
//     return false
//   }
//   // BFSI() {
//   //   let node = this.root, data = [], queue = []
//   //   queue.push(node)
//   //   while (queue.length) {
//   //     node = queue.shift()
//   //     data.push(node.val);
//   //     if (node.left) queue.push(node.left)
//   //     if (node.right) queue.push(node.right)
//   //   }
//   //   return data
//   // }
//   // BFSR() {
//   //   let node = this.root, data = [], queue = []

//   //   function traverse(node) {
//   //     if (!root) return null;
//   //     let right = invertTree(node.right);
//   //     let left = invertTree(node.left);

//   //     node.left = right;
//   //     node.right = left;
//   //     return node;
//   //   }
//   //   traverse(this.root)
//   //   return data
//   // }
//   DFSperOrder() {
//     let data = []
//     function traverse(node) {
//       data.push(node.val)
//       if (node.left) traverse(node.left)
//       if (node.right) traverse(node.right)
//     }
//     traverse(this.root)
//     return data
//   }

//   DFSPostOrder() {
//     let data = []
//     function travers(node) {
//       if (node.left) travers(node.left)
//       if (node.right) travers(node.right)
//       data.push(node.val)
//     }
//     travers(this.root)
//     return data
//   }
//   DFSInOrder() {
//     let data = []
//     function travers(node) {
//       node.left && travers(node.left)
//       data.push(node.val)
//       node.right && travers(node.right)
//     }
//     travers(this.root)
//     return data
//   }

// }

// let bts = new BunarySerachTree()
// bts.insertNodeR(10)
// bts.insertNodeR(6)
// bts.insertNodeR(3)
// bts.insertNodeR(8)
// bts.insertNodeR(15)
// bts.insertNodeR(20)
// bts.find(30)

// bts.root = new BTSNode(10)
// bts.root.right = new BTSNode(40)
// bts.root.left = new BTSNode(4999)

// console.log(bts.DFSperOrder())
// console.log(bts.DFSPostOrder())
// console.log(bts.DFSInOrder())



// Hash Tabel Implementation ++++++++++++++==-=======

// class HashTable {
//   constructor(size = 7) {
//     this.dataMap = new Array(size)
//   }
//   _hash(key) {
//     let hash = 0
//     for (let i = 0; i < key.length; i++) {
//       hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length
//     }
//     return hash
//   }

//   set(key, value) {
//     let index = this._hash(key)
//     if (!this.dataMap[index]) {
//       this.dataMap[index] = []
//     }
//     this.dataMap[index].push([key, value])
//     return this
//   }

//   get(key) {
//     let index = this._hash(key)
//     if (this.dataMap[index]) {
//       for (let i = 0; i < this.dataMap[index].length; i++) {
//         if (this.dataMap[index][i][0] === key) {
//           return this.dataMap[index][i][1]
//         }
//       }
//     }
//     return undefined
//   }
//   key() {
//     let allKey = []
//     for (let i = 0; i < this.dataMap.length; i++) {
//       if (this.dataMap[i]) {
//         for (let j = 0; j < this.dataMap[i].length; j++) {
//           allKey.push(this.dataMap[i][j][0])
//         }
//       }

//       return allKey
//     }
//   }
// }

// let Htable = new HashTable()

// Htable.set("data1", 2)
// Htable.set("data2", 1)
// Htable.set("data3", 3)
// Htable.set("data4", 4)
// Htable.set("data6", 5)

// console.log(Htable.key())

// console.log(Htable)


// +++++=== Graph Implementation ++====================


class Graph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }
  addEdge(ver1, ver2) {
    this.adjacencyList[ver1].push(ver2)
    this.adjacencyList[ver2].push(ver1)
  }
  removeEdge(ver1, ver2) {
    this.adjacencyList[ver1] = this.adjacencyList[ver1].filter(v => v !== ver2)
    this.adjacencyList[ver2] = this.adjacencyList[ver2].filter(v => v !== ver1)
  }
  removeVertex(ver1) {
    while (this.adjacencyList[ver1].length) {
      const adjacencyVertex = this.adjacencyList[ver1].pop()
      this.removeEdge(ver1, adjacencyVertex)
    }
    delete this.adjacencyList[ver1]
  }
  // Recursive DFS Graph
  DFSSearch(start) {
    const result = []
    const visited = {}
    const adjacencyList = this.adjacencyList;
    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true
      result.push(vertex)
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfs(neighbor)
        }
      })
    })(start)
    return result
  }
  // Itrative DFS Graph
  DFSsearchItrative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currVertex;

    visited[start] = true

    while (stack.length) {
      currVertex = stack.pop()
      result.push(currVertex)

      this.adjacencyList[currVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true
          stack.push(neighbor)
        }
      })
    }
    return result
  }
  BFSSearch(start) {
    const queue = [start]
    const result = []
    const visited = {};
    visited[start] = true
    let currVertex
    while (queue.length) {
      currVertex = queue.shift()
      result.push(currVertex)
      this.adjacencyList[currVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor)
        }
      })
    }
    return result
  }
}

let graph = new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B", "D")
graph.addEdge("C", "E")
graph.addEdge("D", "E")
graph.addEdge("D", "F")
graph.addEdge("E", "F")

// console.log(graph.DFSSearch("A"))
// console.log(graph.BFSSearch("A"))

// console.log(graph)


class PriorityQueue {
  constructor() {
    this.value = []
  }
  enqueue(val, priority) {
    this.value.push({ val, priority })
    this.sort();
  }
  dequeue() {
    return this.value.shift()
  }
  sort() {
    this.value.sort((a, b) => a.priority - b.priority)
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }

  addEdge(ver1, ver2, weight) {
    this.adjacencyList[ver1].push({ node: ver2, weight })
    this.adjacencyList[ver2].push({ node: ver1, weight })
  }
  Dijkstra(start, finish) {
    const nodes = new PriorityQueue()
    const distance = {}
    const previous = {}
    let path = [];
    let smallest;

    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distance[vertex] = 0
        nodes.enqueue(vertex, 0)
      } else {
        distance[vertex] = Infinity
        nodes.enqueue(vertex, Infinity)
      }
      previous[vertex] = null
    }
    while (nodes.value.length) {
      smallest = nodes.dequeue().val
      if (smallest == finish) {
        while (previous[smallest]) {
          path.push(smallest)
          smallest = previous[smallest];
        }
        break
      }
      if (smallest || distance[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor];
          let candidate = distance[smallest] + nextNode.weight
          let nextNeighbor = nextNode.node
          if (candidate < distance[nextNeighbor]) {
            distance[nextNeighbor] = candidate;
            previous[nextNeighbor] = smallest
            nodes.enqueue(nextNeighbor, candidate)
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}
const weightedGraph = new WeightedGraph()

weightedGraph.addVertex("A")
weightedGraph.addVertex("B")
weightedGraph.addVertex("C")
weightedGraph.addVertex("D")
weightedGraph.addVertex("E")
weightedGraph.addVertex("F")

weightedGraph.addEdge("A", "B", 4)
weightedGraph.addEdge("A", "C", 2)
weightedGraph.addEdge("B", "E", 3)
weightedGraph.addEdge("C", "D", 2)
weightedGraph.addEdge("C", "F", 4)
weightedGraph.addEdge("D", "E", 3)
weightedGraph.addEdge("D", "F", 1)
weightedGraph.addEdge("E", "F", 1)

weightedGraph.Dijkstra("A", "E")

console.log(weightedGraph)
