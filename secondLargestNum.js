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


/* second solution */
function getSecondLargest(nums) {
    // Complete the function

   
      nums.sort((a,b) => b-a)
    //with original array now sorted in descending order, second largest will be in the second position
      console.log(nums)

      let secondLargest = nums[1]
   
     console.log( secondLargest )
}

getSecondLargest([2,3,1,4,5,8,8,8,0,11,12])
