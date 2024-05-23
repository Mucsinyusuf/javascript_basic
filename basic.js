//output
console.log ("Hello world");
//declaring variables
//data types
// string
//number
//boolean
//null

let number = 60;
const text = "hello"; // we use const when we know the value of the value wont change
var lightsOn = 
// var is outdated so we should use let and const
console.log(number)

// type conversion
// we can change the data type of a variable
let cnumber = '' ;

cnumber = Number ('55');
console.log(cnumber)
console.log(typeof cnumber)

// we can also use toString();
let mynumber= 25;
let mystring = mynumber.toString()
console.log(typeof mystring)

// We can also use the parseInt() and parseFloat() functions:
// We use parseInt() for whole numbers and parseFloat() for numbers with decimal places.
let munmber= 100.25;
let yous = parseInt(munmber)
console.log(yous)


// You are given two variables of type String. 
//The variables are string1 and string2. 
//They are already declared have a string value like '52'.
// You can already use them without worrying about declaring them.
// Your job is to convert them into numbers and calculate their sum. 
//Print the sum to complete the program.



string1 = '52'
string2 = '52'

let sum = Number(string1) + Number(string2)
console.log(sum)

/// simple maths in javascript
 // lets use the following variables to explain all the operation 

 const num1 = 56;
 const num2= 54;
  // addition 
  sum = num1 + num2 ;
  console.log(" the sum is " + sum)
// subtraction
subtract = num1 - num2 ;
console.log (subtract)
// division 
divide = num1/num2;
console.log(divide)
// multiplication
multiple = num1*num2;
console.log(multiple)
// Modulo (%)
// We use the % symbol to calculate the remainder from dividing two numbers.
modulo = num1%num2;
console.log(modulo)

// Math object
// in javascript there is an object called math that can be used for more complex mathematics
// it has multiple methods that we ca use 
// the PI(Math.PI)
Pi = num1*Math.PI
console.log(Pi)

// Rounding a number
// we use Math.round()
value3= Math.round(Pi)
console.log(value3)

// rounding down to the nearest whole number 
// we use Math.florr()
value4 = Math.floor(Pi)
console.log(value4)

// rounding up to the nearest whole number
// we use Math.ceil()
value5 = Math.ceil(Pi)
console.log(value5)

// calculating the sqaure root 
value6 = Math.sqrt(num2)
console.log(value6)
 // Absolute value
 value7 = Math.abs(-Pi)
 console.log(value7)
//powers (first number to the power of second number)
 value8 = Math.pow(4,2)
 console.log(value8)

// minimum
value9 = Math.min(19,2)
console.log(value9)
// maximum
value10 = Math.max(19,2);
console.log(value10)

//random value (generating random values)
value11=Math.random()
console.log(value11)
// Challenge Easy
// You are given two numbers, num1 and num2. 
// Calculate and print their sum. Then, print 
// the smaller number of the two. At the end, print 
// the first number to the power of 2. Use the Math object for this challenge.

let firstNumber= 20;
let secondNumber= 40;
sum2= firstNumber+secondNumber;
console.log(sum2);
console.log(Math.min(firstNumber,secondNumber));
console.log(Math.pow(firstNumber,2))

// string concatenation
const firstName = 'john';
const secondName = 'Williams';
let value;

// concatenation 
value = firstName+secondName
// the output is "johnwilliams"
// to add space between the two names we can use ' '
// i.e value = firstName +' ' + secondName

// now lets try adding a text to a string that already has a value
 val = 'john';
 // to add a string we :
 val += 'Williams'
 console.log(val)
 //output is joahn williams

 // NB in javascript it advisable to use "" instead of '' while making our strings 
 // forexample when we want to add an apostrophe to ur string while using '' we can run into errors


// STRING Methods

// .length = outputs the length of a string 
const ourWord= "nicework";
// the lenght counts also the spaces between the string
console.log(ourWord.length);

// .concat
// method used to cancatenate
console.log(ourWord.concat(' ', "our motto"))
 // .toUpperCase()
 // used to change the string to upper case
 console.log(ourWord.toLocaleUpperCase());
 // .toLowercase()
 //does the opposite of uppercase
 console.log(ourWord.toLowerCase());
   // .indexOf ()
   // gets the index of a letter
   console.log(ourWord.indexOf('n'))

   // .charAt()
   // get character from index 
   console.log(ourWord.charAt(3))

   // substring()
   console.log(ourWord.substring(0,3))
   // replace() replaces a value in a string 
   console.log(ourWord.replace('nice', 'my'))
   // includes is a boolean to check if the wors includes something 
   console.log(ourWord.includes('nice'))

//    You are given a variable of type string 
// called myString. First, print the length of the string. 
// Then, try to find a way to print the last character of the string. 
// At the end, print the first 3 letters of the string.

let stringType ="MyString"
console.log(stringType.length);
console.log(stringType.charAt(7))
console.log(stringType.substring(0,3))

// template leterals 
// template strings were interoduced to make working with strings more simple

const hisname = "joahn doe";
const age = 31;
const occupation = 'Web developer';
const city = 'miami';
 // let say we want to create a sentence wiyh the above data without template leterals it would lok this way
const sentence = 'Hi, my name is ' + hisname + ' and I am ' + age + ' years old. I work as a ' + occupation + ' in ' + city + '.';
// Output: "Hi, my name is John Doe and I am 31 years old. I work as a Web Developer in Miami."
 // we can use template literals instead.
 // they are created with `` instead of ''
 const sentance2 = `hi , my name is ${hisname} and i am ${age} , i am a ${occupation} in ${city}`
 console.log(sentance2)