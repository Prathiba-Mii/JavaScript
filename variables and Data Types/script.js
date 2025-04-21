

var myName = "Prathiba";
// var is variable(key)  , myname = variable container that holds the value , Prathiba = value

// value = piece of information
// variable = container that holds the value
// *rules =>
  // 1. variables starts with a letter , underscore(_) or doller sign($) in starting
// 2.variable cannot be the same as reserved keywords like var,let,const
// 3. variable cannot contain spaces
// 4.variable names are case sensitive
// 5.javascript variables are written in camelCase
// 6. variable name can be as much as u want

// console.log("Prathiba");

var myAge = 20;
// console.log(myAge);

// Data types :---

// number
var myFavNum = 8;
// console.log(myFavNum);

// Strings
var myName="Prathiba";
// console.log(myName);

// Boolean 
var isRaining = true;
// console.log(isRaining);

// undefined
var Prathiba;
// console.log(Prathiba);

// null
var memories = null;
// console.log(memories);

// Big Int
const bigNumber = 23567878989876721872222n;
// console.log(bigNumber);

// Operator
var myFavColor = "blue";
// console.log(myFavColor);
// console.log(typeof myFavColor);
// null kaa type of object hai 
var myBadLuck = null;
// console.log(typeof myBadLuck);
// like this null type of is object

// How to change string into number (add + or number constructor add number keyword)
var myFavGame = "volleyball";
// console.log(typeof myFavGame);
// console.log(typeof +myFavGame);
// console.log(typeof Number(myFavGame));

// how to change number into string  (use string constructor (string))
// let str = 13;
// console.log(typeof str);
// console.log(typeof String(str));
// console.log(typeof (str+" "));

// truthy and falsy
// truthy ==> true value, non empty string ("hello"), non zero number (13), negative no,array and objects which are not empty

// falsy ==> false value,0,empty sstring (''), undefined, NAN (not a number)

// var myName = "Prathiba";
// if(myName) {
//   console.log("I am smart");
// } else{
//   console.log("I am lucky!");
// }

// parseInt && parseFloat Section

// parseInt ==> it used to a parse string into whole number
// parseFloat ==> it used to string into floating point(decimal Number)

// parseInt
// const myString = "13";
// const myNumber = parseInt(myString);
// console.log(myNumber);
// console.log(typeof myNumber);

// const myString = "13.7";
// const myNumber = parseInt(myString);
// console.log(myNumber);
// console.log(typeof myNumber); // only whole number

// parseFloat
// const myString = "13.5";
// const myNumber = parseFloat(myString);
// console.log(myNumber);
// console.log(typeof myNumber);    


// practice

// console.log(parseInt("123"));
// console.log(parseInt("123",10));
// console.log(parseInt("  123  "));
// console.log(parseInt("077"));
// console.log(parseInt("1.23"));

// console.log(parseFloat("123"));
// console.log(parseFloat("123",10));
// console.log(parseFloat("  1.23  "));
// console.log(parseFloat("077"));
// console.log(parseFloat("1.23"));

// console.log(parseInt("#&123"));
// console.log(parseInt("-123"));
// console.log(parseInt("xyz"));


// concatatination


let sum = "5" - 5;
let sum1 = ("5" + 5);
console.log("java "+"script");
// console.log(sum1);
// type conversion
// 1.implict conversion
// 2.explict conversion

console.log(" "+" ");
console.log(" "+0);
console.log("Prathiba "+"kamle");
console.log("Prathiba"-"kamle");
console.log(true+true);
console.log(true+false);
console.log(false+true);
console.log(false-true);
//false=0,true=1

