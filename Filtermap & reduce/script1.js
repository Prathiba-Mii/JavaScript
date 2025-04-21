
// Learning about maps

const myNumers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumers.map( (num) => num + 10)
// const newNums = myNumers.map( (num) => { return num + 10})  // if we open scope means {} then we have to add return there otherwise it will show error

const newNums = myNumers
                .map( (num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)  // chaining adding again like chain
console.log(newNums);   // map is also a callback function like filter 
