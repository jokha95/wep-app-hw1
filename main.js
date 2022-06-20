
  
// // // //implement vector 
class vector {
    constructor(x,y){
        this.x = x;
        this.y = y;

    }
    add(value){
        return new vector (this.x + value.x , this.y + value.y)
        
    }
    subtraction(value){
        return new vector (this.x - value.x , this.y - value.y)
        
    }
    multiplication(value){
        return (this.x * value.x , this.y * value.y)
        
    }  
    length(){
        return Math.sqrt(this.x * this.x + this.y * this.y);
        
    }
    direction(){
        return Math.atan2(this.x, this.y) * 180 / Math.PI;
        
    }
    distance(){
        return (this.x / this.length(), this.y / this.length());
        
    }
    
    
}

const a = new vector (22,33);
const b = new vector (55,44);

const sum = a.add(b);
const sub = a.subtraction(b);
const mult = a.multiplication(b);
const length = a.length(a);
const direction = a.direction(a);
const distance = a.distance(a);



console.log(a);
console.log(b);
console.log(sum);
console.log(sub);
console.log(mult);
console.log(length);
console.log(direction);
console.log(distance);










//  var v = new Victor(22, 33);
//  x = v.x;
//  console.log(x);

// var v = new Victor(22, 33);
// y = v.y;

// console.log(y);

// // //add 

// var v1 = new Victor(100, 200);
// var v2 = new Victor(20, 30);
// const sum = v1.add(v2);
// a = sum.toString();

// console.log(a)

// //sub 


// //mult

// console.log(a)
//length

//distance


// class Vector {
//     constructor(...components) {
//       this.components = components
//     }
  
//     add({ components }) {
//       return new Vector(
//         ...components.map((component, index) => this.components[index] + component)
//       )
//     }
//     subtract({ components }) {
//       return new Vector(
//         ...components.map((component, index) => this.components[index] - component)
//       )
//     }
//   }
  
//   const one = new Vector(2, 3)
//   const other = new Vector(2, 1)
//   console.log(one.add(other))
//   // Vector { components: [ 4, 4 ] }
//   console.log(one.subtract(other))
//   // Vector { components: [ 0, 2 ] }

// return Math.sqrt( this.x * this.x + this.y * this.y );




// class Vector extends Array {
//     add(other) {
//       return this.map((e, i) => e + other[i]);
//     }
//   }
  
//   let v = new Vector(1, 2, 3);
//   console.log(v.add(v));

  

// // function Vector(arg) {
// //     this.array = arg;
// //     this.add = add;
// // }

// // function add(called_array) {
// //     if (Array.isArray(this.array) && Array.isArray(called_array.array)) {
// //         if (this.array.length === called_array.array.length) {
// //             let result = [];
// //             for (let i = 0; i < this.array.length; i++) {
// //                 if (typeof(this.array[i]) == "number" && typeof(called_array.array[i]) == "number") {
// //                     result.push(this.array[i] + called_array.array[i]);
// //                 } else {
// //                     result.push("Invalid vector value");
// //                 }
// //             }
// //             return new Vector(result);
// //         } else {
// //             return new Vector("The vectors are not the same length.");
// //         }
// //     } else {
// //         return new Vector("One of your arguments or both of them is not an array.");
// //     }
// // }

// // let caller_array = new Vector([3,5,7]);
// // let called_array = new Vector ([5,2,9]);

// // console.log(caller_array.add(called_array).array);


