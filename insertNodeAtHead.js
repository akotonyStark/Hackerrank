
class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}
function insertNodeAtHead(head, data) {
    let node = new Node(data)
    node.head = data
    node.next = head

return node

}
