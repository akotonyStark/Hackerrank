/* Alice has a binary string. She thinks a binary string is beautiful if and only if it doesn't contain the substring 010.

In one step, Alice can change a 0 to a 1 or vice versa. Count and print the minimum number of steps needed to make Alice see the string as beautiful.

*/


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
