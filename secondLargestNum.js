function getSecondLargest(nums) {
    // Complete the function

   //bubble sort
   let i = 0;
    do{
      for(let i=0; i< nums.length-1; i++){
        if(nums[i] > nums[i+1]){
          let temp = nums[i]
          nums[i] = nums[i+1]
          nums[i+1] = temp
        }
      }
      i++
    }while(i<nums.length)
    


      let largest = nums[nums.length - 1 ];
      let temp = nums.filter(item => item !== largest)
   
      let secondLargest = temp[temp.length-1]
   

     console.log( secondLargest )
}

getSecondLargest([2,3,1,4,5,8,8,8,0,11,12])
