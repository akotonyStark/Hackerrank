function meanMedianMode(n){
let arr = []
for(let i=0; i<n; i++){
  //arr.push(Math.random()*10)
  arr.push(parseInt(Math.random()*10))
}
console.log(arr)
  let mean = 0, median = 0, mode = 0,sum = 0
  arr = arr.sort((a,b) => a-b)
  for(let i = 0; i<arr.length; i++){
    sum = sum + arr[i]
  }
  mean = (sum/arr.length).toFixed(1)

  if(arr.length % 2 === 1){
    median = arr[parseInt(arr.length/2)]
  }
  else{
    median = (arr[arr.length/2] + arr[(arr.length/2)-1])/2
  }

  //counting mode = highest occuring number
  let temp = []
  for(let i=0; i<arr.length; i++){
    if(arr[i] === arr[i+1]){
      temp.push(arr[i])
    }
  }


  console.log('Mean:', mean)
  console.log('Median:', median)
  console.log('Mode:',temp[0])
}

meanMedianMode(15)
