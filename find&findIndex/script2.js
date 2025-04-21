

// Array - findIndex() Function :

var ages = [10,23,19,20];
// var adultAge = 18;
// ages >= adultAge
// findIndex(Function Name)
// findIndex() method returns the index of the first element in an array that pass a test
// first pass true that only index search remaining we dont check in findIndex()

console.log(ages);

var b = ages.findIndex(checkAdult);
console.log(b);

function checkAdult(age) {
  return age >= 18;
}

