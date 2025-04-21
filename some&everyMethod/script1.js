
// Array - some() function:

var ages = [10,13,18,20];
// var adultAge = 18;
// ages >= adultAge 
// some() => checks if any of the elements in an array pass a test

console.log(ages);
var b = ages.some(checkAdult); //checkAdult is function name


function checkAdult(age) {
  return age >= 18;
}

console.log(b);
