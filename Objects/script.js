// singleton  -- leterals me nahi banta contructors se banta singleton

// object literals



// Object.create // object creating using contructor in this only singleton is there 

const mySym = Symbol("key1")

const JsUser = {
  name:"Prathiba",
  fullname : "Prathiba Kamle",
  [mySym]: "mykey1",
  age:20,
  location:"Hyderabad",
  email:"prathibhakamle@gmail.com",
  isLoggedIn : false,
  lastLoginDays:["friday","Saturday"]
} 

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser[mySym]) //9,14,24 for symbol

JsUser.email = "Kamle@prathiba.com"
Object.freeze(JsUser)
JsUser.email = "prathibha@gmail.com"
// console.log(JsUser);

// mdn js datatypes


JsUser.greeting = function() {
  console.log("Hello JS User");
  
}
JsUser.greetingTwo = function() {
  console.log(`Hello JS User,${this.name}`);
  
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
