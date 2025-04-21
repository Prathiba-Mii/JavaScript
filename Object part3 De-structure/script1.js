// Mathpie

// const descripter = Object.getOwnProperty
// const descripter = Object.getOwnPropertyDeescriptor(Math,"PI")
// 
// console.log(descripter);


// console.log(Math.PI);

// const mynewObject = Object.create(null)

const chai = {
  name : "ginger chai",
  price : 250,
  isAvailable : true
}


console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,"name", {
  writable: false,
  enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for(let [key,value] of Object.entries(chai)) {
  if (typeof value !== 'function') {
    console.log(`${key} : ${value}`);
    
  }
}