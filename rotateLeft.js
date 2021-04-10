function rotateLeft(d, arr) {
    // Write your code here
    let temp = []

    for(let i=0; i<d; i++){
     temp.push(arr.shift())
    }

    return [...arr,...temp]
}

//driver code
let arr = [1,2,3,4,5]
let d = 4
console.log(rotateLeft(d,arr))
