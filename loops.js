// loops :
// while loops
// DO-While loops
// for loops

// while loops 
// the while loop loops through a code as long as a specified condition is true
// syntax
//  while(condition){
//     // code here
//  }

 // dont us conditions that can never be false like it is true all way through in whle lopp 
 // it will cause an infinite loop which can break your program

//  let counter = 0;
//  while(counter<10){
//     console.log(`counting ${counter}`);
//     counter++;
//  }

let num = 110;
let count = 0;
while(num !== 0){
    num = Math.round(num/10);
    count++;
}
console.log(count)
 
// Do while loop 
 // syntax 
//  do{

//  }while(consdition)

let num2 = 600
let count2 = 0


do {
    num2=Math.floor(num2/10);
    count2++
}while(num2!==0)

console.log(count2)

let digit = 200;
do{
    console.log(digit-- )
}while(digit>0)