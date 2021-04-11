function makeAnagram(a, b) {

let arrofA = [...a]
let arrofB = [...b]
let temp = []


arrofA.forEach(function(value, index){
  if(b.includes(arrofA[index])){
        temp.push(arrofA[index])
      }
})

arrofB.forEach(function(value, index){
  if(a.includes(arrofB[index])){
        temp.push(arrofB[index])
      }
})


if(temp.length === 0){
  return 0
}
else{
let totalLenofBoth = arrofB.length + arrofA.length
let numOfCharstoDel = totalLenofBoth - (temp.length)
return numOfCharstoDel
}
}

console.log(makeAnagram('fcrxzwscanmligyxyvym','jxwtrhvujlmrpdoqbisbwhmgpmeoke'))
