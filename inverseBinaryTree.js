function inverseBinaryTree(tree){
  
  if(tree){
    let left = tree.left
    let right = tree.right
    
    //swap
    tree.right = left
    tree.left = right
    
    //recursive call
    inverseBinaryTree(tree.left)
    inverseBinaryTree(tree.right)
  
}
