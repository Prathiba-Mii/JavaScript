const name = "Prathiba Kamle";
const repoCount = 50;

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// ` is used first then where using the variable have to add ${} like this in the {write variable name}

const gameName = new String('Prathiba-Kamle');

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5)); //which character at which which index
// console.log(gameName.indexOf('a')); //at which index that character is there

const newString = gameName.substring(0,9); //last index is not including like 9 here
// console.log(newString);

// const anotherString = gameName.slice(-8,4);
// console.log(anotherString);

const newStringOne = "    Prathiba      "
console.log(newStringOne);

console.log(newStringOne.trim());

// see mdn

const url = "https://Prathiba.com/prathiba%20Kamle";

console.log(url.replace('%20','-'));

console.log(url.includes('prathiba'));
console.log(url.includes('Chutki'));

console.log(gameName.split('-'));
