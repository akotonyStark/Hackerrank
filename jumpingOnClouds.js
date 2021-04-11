
// Complete the jumpingOnClouds function below.
function jumpingOnClouds(arr) {
let safe = 0, danger = 1, count = 0

let jump = 0;
while(jump<arr.length-1){
  if(arr[jump] === safe && arr[(jump+1)] === safe){
    //check if next one is safe as well
    if(arr[jump+2] === safe){
    count++
    jump = jump + 2
    }
    else{
    count++
    jump = jump + 1
    }
   
  }
  else if(arr[jump] === safe && arr[jump+1] === danger){
    count ++
    jump = jump + 2
  }
  
}
return count
}

let arr = [0,0,0,1,0,0]
console.log(jumpingOnClouds(arr))

