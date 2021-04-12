//created a chartAt(i) function since it wasnt inbuilt in js
function charAt(string, index) {
  var charAt = string[index];
  return charAt;
}

// Complete the alternatingCharacters function below.
function alternatingCharacters(str) {
  let temp = []
    for(let i=0; i< str.length-1; i++){
      
      if (charAt(str,i) === charAt(str,i+1)) { 
            temp.push(charAt(str,i))//deleted items to get the length
                
      } 
    }
  return temp.length

}
console.log(alternatingCharacters('AAABBB'))
