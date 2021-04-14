class Polygon{
    constructor(arr){
        this.arr = arr
        this.perimeter = function(){
          let sum = 0
              arr.forEach(function(value,index){
                 sum  = sum + value
              })
              return sum
        }
    }
}


const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());
