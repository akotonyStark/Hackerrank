// Complete the matchingStrings function below. 
function matchingStrings(strings, queries) { 
  let arr = [] 
  queries.map(function(item){
     let temp = strings.filter(value => value === item)
     arr.push(temp.length) 
     return item
     }) 
     return arr;
  }

   
