// Complete the beautifulBinaryString function below.
function beautifulBinaryString(b) {

        let arr = [...b]
        let count = 0
        arr.forEach(function(value, index){
        if(arr[index] === '0' && arr[index+1] === '1' && arr[index+2] === '0'){
            //mutate the array
            arr[index+2] = '1'
            count++
        }
        })
    return count;
}
