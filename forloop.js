// syntax for (statement1; statement2; statement3){
    // code here
//}
// he chain of commands would look something like this:

// Get to a for loop in the code
// Execute Statement 1
// Then, check the condition in Statement 2:
// If the condition is true:
// Execute the code
// Execute Statement 3
// Go back to step 3
// If the condition is false:
// Stop the loop
// Tips
// In almost every for loop you will write, the statements will look something like this:

// Statement 1 initializes a variable with a starting value, most likely 0.

// Statement 2 is a condition that checks if that variable is greater than or lesser than some value.

// Statement 3 increments or decrements the variable by some value, most likely 1.

for (let x = 0;  x<=5; x++){
    console.log(x)

} 

let message = 'goodmorning';
for(let i = 0; i<message.length; i++){
    console.log(message.charAt(i))
}

let sum = 0
for(let k=0; k<10; k++){
    if(k%2===0){
        sum  +=k;
        
    }
}
console.log( `sum=${sum}`)


