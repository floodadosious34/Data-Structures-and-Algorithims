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

    reverseIterative(node) {
        let prev = null
        let current = node
        let next = null
        
        while(current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        node = prev;
        return node;
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
// console.log(list)

console.log(list.reverseIterative(list.head))