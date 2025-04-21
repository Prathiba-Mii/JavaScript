
// Array - every() Function:--

var ages = [10,13,18,20]

var b = ages.every(checkAdult);

function checkAdult(age) {
  return age >= 18;
  
}
console.log(b);

// if every => all values are true then only gets true otherwise false
//in some function in that if one is true then it will be true prints but for every everting should be true