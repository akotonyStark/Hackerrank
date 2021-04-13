const Node = class{
    constructor(data){
        this.data = data
        this.next = null
    }
}
function insertNodeAtPosition(head, data, position) {
    let new_node = new Node(data)
    new_node.data = data
    
    if(position == 0){
        new_node.next = head
        return new_node
    }
    else{
        //Get node before desired postion
        let prevNode = head
        for(let i=0; i<position-1; i++){
            prevNode = prevNode.next
        }
        
        //insert your new node
        new_node.next = prevNode.next
        prevNode.next = new_node
        
        return head
        
        
    }

}
