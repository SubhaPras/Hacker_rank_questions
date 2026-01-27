// create using function

const node = (value, next = null) => {
    return {
        value : value,
        next : next
    }
} 

// Create using class

class Node {
    constructor (value){
        this.value = value,
        this.next = null
    }
}


let n1 = node(1)
let n2 = node(2)
let n3 = node(3)
let n4 = node(4)
let n5 = node(5)

n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5


const printList = (current) => {
    while(current !== null){
        console.log(current);
        current = current.next
    }
}

printList(n1)

const deleteNode = (head, value) => {
    if(head.value === value){
        return head.next
    }

    let current = head
    while(current.next !== null){
        if(current.next.value === value){
            current.next = current.next.next;
            break;
        }
        current = current.next
    }

    return head
}

console.log(deleteNode(n1, 3));
