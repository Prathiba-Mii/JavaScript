let btn = document.querySelector("button")

btn.addEventListener("click",() => {
  // console.log("button was clicked");
  let fact = getFacts();
})

let url = "https://catfact.ninja/fact";

async function getFacts() {
  try{
    let res = await fetch(url);
    // let data = await res.json();
    return res.data.fact;
    console.log(fact);
    
  } catch (e) {
    console.log("erroe - ",e);
    return " No fact found"
  }
  
}