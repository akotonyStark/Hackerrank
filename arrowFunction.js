const modifyArray = (nums) => {
    nums.forEach(function(value,index){
        if(value % 2 === 0){
            value = value * 2
            nums[index] = value
        }
        else{
            value = value * 3
            nums[index] = value
        }
        return nums
    })
    return nums
}
