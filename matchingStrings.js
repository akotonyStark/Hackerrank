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

console.log(matchingStrings(strings, queries))

/* solution 2 */
function matchingStrings1(strings, queries){
    let temp = [];
    queries.forEach(que => {
        let data = strings.filter(str => str === que).length;
        temp.push(data);
    });
    return temp;
}

/* solution 3*
very optimized code
*/
function matchingStrings(strings, queries) {
   return queries.map( item => (strings.filter(value => value === item).length))
}
   
