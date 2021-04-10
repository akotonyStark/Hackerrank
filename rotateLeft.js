function rotateLeft(d, arr) {
    // Write your code here
    let temp = []

    for(let i=0; i<d; i++){
     temp.push(arr.shift())
    }

    return [...arr,...temp]
}
