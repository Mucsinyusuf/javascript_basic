// switch staements
// syntax
// switch(expression){
//     case 1:
//         break;
     
//     case 2:
//         break;

//     case 3:
//         break;

//     default:

// }

// Challenge

// Easy
// You are given a number variable called number from 1 to 10. 
// Print Odd if the number is odd and print Even if the number is even. 
// Print Invalid number if the number is not from 1 to 10. Use a switch 
// statement.
const myNumber=19;
switch(myNumber){
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
        console.log("Odd")
        break;
    case 2:
    case 4:
    case 6:
    case 8:
    case 10:
        console.log("Even")
    
    default:
        console.log("invalid")

}