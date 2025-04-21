const div =  document.createElement('div')
console.log(div);
div.className = "main"
div.id = Math.round(Math.random() * 10 + 1)
div.setAttribute("title","generated title")
div.style.backgroundColor = "green"
div.style.padding = "12px"
// div.innerText = "Prathiba Kamle"

// creating a new element
const addText = document.createTextNode("Prathiba Kamle")
div.appendChild(addText)
document.body.appendChild(div)