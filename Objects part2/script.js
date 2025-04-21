// console.log("Prathiba Kamle");

// const tinderUser = new Object() // => singleton object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Chutki"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
  email : "abc@gmail.com",
  fullname : {
     userfullname : {
      firstname : "Prathiba",
      lastname : "Kamle"
     }
  }
}

// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {1 : "a",2 : "b"}
const obj2 = {3 : "c",4 : "d"}
const obj4 = {5 : "c",6 : "d"}

// const obj3 = {  obj1 , obj2}
// const obj3 = Object.assign(obj1,obj2)


// const obj3 = Object.assign({}, obj1, obj2,obj4)

const obj3 = {...obj1,...obj2}  // mostly this syntax is used
// console.log(obj3);


const user = [
  {
    id: 1,
    email: "abc@gmail.com"
  },
  {
    id: 1,
    email: "abc@gmail.com"
  }
]

// users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // entries used less

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

