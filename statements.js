// if statements
 // if its raining:
      //stay inside
    // else :
        //go play 

// syntax 
// if (condition){

// }
// You are given a number called num. Print the number if the number is greater than 5.

const num = 6;
if(num>5){
    console.log(num)
}

// if else statements 
// syntax
// if(condition){
    //if someStatement is true

//}//else{
    // if someStatement is false
//}

const password = 'mucsin';
if(password){
    console.log("welcome")
}else{
    console.log("wrong")
}

// if - else if - else statements
// used when making multiple decisions 
 // syntax
 // if(condition){

 //}else if {

 //}else{

 //}


 const time = 60;
 if(time == 12){
    console.log("mid day")
 }else if(time<12){
    console.log("morning")
 }else if (time>12){
    console.log("evening")
 }



  // challange 
  // You are given a number variable called marks. 
  //The value of the variable signifies the marks that some person scored on a test.
//   Print “S grade” if marks is between 90 and 100.
// Print “A grade” if marks is between 80 and 90.
// Print “B grade” if marks is between 70 and 80.
// Print “C grade” if marks is between 60 and 70.
// Print “D grade” if marks is between 50 and 60.
// Print “F grade” if marks is between 40 and 50.
// Print “Student has failed” if marks is between 0 and 40.
// Else print “Invalid marks”.
 const marks = 99;
 if (marks >= 100){
    console.log("inavlid grade")
 }else if (marks<100 && marks>90){
    console.log("S grade")
 }else if (marks<90 && marks>80){
    console.log("A grade")
 }else if (marks<80 && marks>70){
    console.log("B grade")
 }else if (marks<70 && marks>60){
    console.log("C grade")
 }else if (marks<60 && marks>50){
    console.log("D grade")
 }else if (marks<50 && marks>40){
    console.log("f grade")
 }else {
    console.log("failed")
 }