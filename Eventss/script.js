
// document.getElementById('owl').onclick = function() {
//   alert("owl clicked")
// }

// attachEvent()
// jQuery - on


// type, timestamp,defaultPrevented
// target, toElement, srcElement,currentTarget
// clientX,clientY,screenX,screenY
// altkey,ctrlkey,shiftkey,keycode


// mostly get events of mouse and environment like wt clicked , mouse position, in this we can see its time

// like this we use event :-----

// document.getElementById('owl').addEventListener('click',function(e){
//   console.log("owl clicked"); 
// },false)

//event propagation

document.getElementById('images').addEventListener('click',function(e){
  console.log("clicked inside the ul"); 
},false)

document.getElementById('owl').addEventListener('click',function(e){
  console.log("owl clicked"); 
  e.stopPropagation() // event dont go up by stop propagation
},false)
// inside to outside event tracks like first came owl clicked then inside the ul => this is called bubling

// false is default in that place if true is there then => it is 'capturing' mode in this event works top to down like first inside then owl comes in console


document.getElementById('google').addEventListener('click',function(e){
  e.preventDefault();
  e.stopPropagation() //bubling dont happen like getting like clicked inside that line dont come
  console.log("google clicked");
})

// basics these are 