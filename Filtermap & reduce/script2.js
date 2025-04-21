// Reduce 

const myNums = [1,2,3]

// const myTotal = myNums.reduce( function (acc,currval) {
//   console.log(`acc: ${acc} and currval: ${currval}`);
  
//   return acc + currval
// }, 0) // here accumulator is 0 this 0 u can put anything 
//acc => accumulator (previous value), currval => current value from array

// *********************
// in arrow function

const myTotal = myNums.reduce( (acc,curr) =>  acc + curr, 0)

console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js cource",
    price: 2999
  },
  {
    itemName: "python cource",
    price: 999
  },
  {
    itemName: "data science cource",
    price: 12999
  },
  {
    itemName: "mobile dev cource",
    price: 5999
  }
]

const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price,0)

console.log(priceToPay);
