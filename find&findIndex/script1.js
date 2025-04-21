
// Array - find() Function :

var ages = [10,23,19,20];
// var adultAge = 18;
// ages >= adultAge
// find(Function Name)
// find() method returns the value of the first element in an array that pass a test
// first pass true that only search remaining we dont check in find()

console.log(ages);

var b = ages.find(checkAdult)
console.log(b);

function checkAdult(age) {
  return age >= 18;
}