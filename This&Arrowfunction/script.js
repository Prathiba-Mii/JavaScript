const user = {
  username : "Prathiba Kamle",
  price : 999,

  welcomeMessage : function() {
    console.log(`${this.username} , welcome to website`);
    // console.log(this);
  }
}

user.welcomeMessage();
user.username = "Chutki"
user.welcomeMessage()

// console.log(this);

// function chai(){
//   let username = "Kamle" // we cant use this in function 
//   console.log(this.username);
// }
 
// chai()

//***********************************************/

const chai = () => {
  let username = "Chutki"
  console.log(this.username);
  console.log(this);
  
}

// chai()

// ****************

// Syntax:----
// explicit it is in this we have to add return key word

// const addTwo = (num1,num2) => {
  // return num1 + num2
// }
// console.log(addTwo(3,4));

// *******************************

// Implicit returdance => another way to use arrow function
// in this we dont need to add return key word and {} , have to add brackets only ()

// const addTwo = (num1,num2) =>  num1 + num2


// const addTwo = (num1,num2) => (num1 + num2)

const addTwo = (num1,num2) => ({username : "Prathiba"})  // like this we can use objects

console.log(addTwo(3,4));
