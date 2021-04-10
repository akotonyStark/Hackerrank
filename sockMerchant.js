// Complete the sockMerchant function below.
function sockMerchant(n, arr) {
//first sort it out
let sorted = false
for(let j=0; j<arr.length-1; j++){
  for(let i=0; i<arr.length-1; i++){
    if(arr[i] < arr[i+1]){
      sorted = true
    }
    else{
      let temp = arr[i]
      arr[i] = arr[i+1]
      arr[i+1] = temp 
    }
  }
}

//work with sorted array
let count = 0
let index = 1
while(index<arr.length){
  if(arr[index] === arr[index-1]){
     count++
     index = index + 2
  }
  else{
    index = index + 1
  }
  
}
  return count
}

let arr = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]

console.log(sockMerchant(9,arr))


