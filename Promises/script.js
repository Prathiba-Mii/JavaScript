

// let firstPromise = new Promise ((resolve,reject) => {
//   console.log("Prathiba");
//   // resolve(1111);
//   reject(new Error("Internet Server Error"));
// });

// Promise contains resolve , reject 
// resolve means fulfill, success 
// reject means fail 
// pending means pending nt successfull and not reject 
// Promise is a object  

// if we didnt wrote resolve or error like this it will show pending 
// if we write resolve then it means it is success


// Now Asynchronus Code

// let firstPromise = new Promise((resolve,reject) => {

//   setTimeout(function sayMyName() {
//   console.log("My name is Prathiba Kamle");
//   },10000);
//   resolve(1);
// });

// Promise => fulfilled => then() 
// Promise => reject => catch() 


// let learnPromise = new Promise((resolve,reject) => {
//   setTimeout(function MyPromise() {
//     console.log("Learn Promise");
//   },10000);

// });

let Promise1 = new Promise((resolve,reject) => {

  let success = false;
  if(success) {
    resolve("Promise Fulfilled");
  }
  else {
    reject("Internal Server Error");
  }
});

// *********************************************
// (2type):-------------------------------------------

// Promise1.then((message) => {
//     console.log("first msg : " + message);
//     return "Promise fulfilled second message";
// }).then((message) => {
//    console.log("second msg: " + message);
//    return "Promise fulfilled third message";
// }).then((message) => {
//   console.log("third msg: " + message);

// }).catch((error) => {
//     console.error(error);
    
// }).finally((message) => {
//    console.log("Metho chalunga");
// });

// ******************************************************************

// Promise1.then((message) => {

//   console.log("the message is " + message);
// }).catch((error) => {
//   console.log("Error: "+ error);
// 
// });


// ******************************************************

let promise1 = new promise((resolve,reject) => {
  setTimeout((resolve,1000,"first"));      
})
let promise2 = new promise((resolve,reject) => {
  setTimeout((resolve,1000,"second"));      
})
let promise3 = new promise((resolve,reject) => {
  setTimeout((resolve,1000,"third"));      
})

Promise.all([promise3,promise2,promise1]).then((values) => {
 console.log(values);
})
.catch((error) => {
  console.log("error : " + error);
}
);
  
