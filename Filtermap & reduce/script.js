
// Learning about Arrow functions and filter

// const coding = [ "js" , "ruby" , "python","cpp" , "java"]

// const values = coding.forEach ((item) => {
//   // console.log(item);
//   return item
// })

// console.log(ums.push(num)




const myNums = [1,2,3,4,5,6,7,8,9,10]

// using filter method

// const newNums = myNums.filter( (num) => num > 4)
// const newNums = myNums.filter( (num) => {
//   return num > 4
// })

//************************/

// using foreach


// const newNums = []
// myNums.forEach( (num) => {
//   if(num > 4) {
//   newNums.push(num)
// }
// })

// console.log(newNums);

// **********************************************

const books = [
  {title: 'Book one', genre:'Fiction', publish:1981, edition: 2004},
  {title: 'Book two', genre:'Non-Fiction', publish:1992, edition: 2008},
  {title: 'Book three', genre:'History', publish:1999, edition: 2007},
  {title: 'Book four', genre:'Non-Fiction', publish:1989, edition: 2010},
  {title: 'Book five', genre:'Science', publish:2009, edition: 2014},
  {title: 'Book six', genre:'Fiction', publish:1987, edition: 2010},
  {title: 'Book seven', genre:'History', publish:1986, edition: 1996}
]

let userBooks = books.filter( (bk) => bk.genre === 'History')
 userBooks = books.filter( (bk) => {
  return bk.publish >= 1995 && bk.genre === "History"
} )
console.log(userBooks);
