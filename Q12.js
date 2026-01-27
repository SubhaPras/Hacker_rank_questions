// Remove Consecutive Duplicates from Sorted Linked List
// Write a function "deleteDuplicates" that removes consecutive duplicate nodes in-place, retaining only the first node of each code. Return the head of the resulting list.

// Example

// Input

// head = [1, 2, 2, 2, 3, 4, 4, 5]
// Output

// [1, 2, 3, 4, 5]


const deleteDuplicates = (head) => {
    let set = new Set;

    let current = head;
    while( current !== null && current.next !== null){
        if(! set.has(current.value)){
            set.add(current.value)
        }else {
            current.next = current.next.next
        }
        current = current.next
    }

    return head
}