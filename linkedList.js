class Node { //node has data and a value and in this case a linked list
    constructor(data, next = null) {
        this.data = data
        this.next = next
        this.previous = null
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    push(data) {
        //prepend to head for O(1)
        let node = new Node(data)
        let current
        if(this.head === null) {
            this.head = node
        } else {
            current = this.head
            while(current.next) {
                current = current.next
            }

            current.next = node

            return
        }
    }
}

let list = new LinkedList()
// let node1 = new Node(1)
// let node2 = new Node(2)

list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.push(6)
console.log(list)

// let node1 = new Node("forrest hills")
// let node2 = new Node("green street")
// let node3 = new Node("stony brook")

// node1.next = node2
// node2.previous = node1
// node2.next = node3
// console.log(list)