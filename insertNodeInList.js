

function insertNodeAtTail(head, data) {

    let node = new Node(data)
    node.data = data
    node.next = null
    
    if(head == null){
        return node
    }
    else{
        let curr = head
        while(curr.next != null){
            curr = curr.next
        }
        curr.next = node
        return head
    }

}
