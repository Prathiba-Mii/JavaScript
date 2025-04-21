let a = 1000  // Global scope
const b = 20
var c = 30

if(true){
  let a = 10;
  const b = 200;
  console.log("Inner: " , a);
  //block scope
}
console.log(a);
console.log(b);
console.log(c);

// {} => { is known as scope}
// { writen inside this bracket is known as block scope} , outside of the {} bracket written code is known as Global scope

//mini hosting

function one() {
  const username = "Prathiba"

  function two() {
    let website = "Youtube"
    // console.log(website);
    
  }
  // console.log(website);
  // two()
}


