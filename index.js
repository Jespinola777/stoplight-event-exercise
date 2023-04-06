let stopButton = document.getElementById("stopButton");
let slowButton= document.getElementById("slowButton")
let goButton= document.getElementById("goButton")
let stopLight = document.getElementById("stopLight");

//mouse enter and leave func
function handleMouseEnter(event){
  console.log(`Entered ${event.target.textContent} button`)
}
function handleMouseLeave(event){
  console.log(`Left ${event.target.textContent} button`)
}



stopButton.addEventListener('mouseenter', handleMouseEnter)
slowButton.addEventListener('mouseenter', handleMouseEnter)
goButton.addEventListener('mouseenter', handleMouseEnter)

stopButton.addEventListener('mouseleave', handleMouseLeave)
goButton.addEventListener('mouseleave', handleMouseLeave)
slowButton.addEventListener('mouseleave', handleMouseLeave)


stopButton.addEventListener("click", function(event){
  if(stopLight.classList.toggle("stop")){ 
    console.log(`${event.target.textContent} on`)
}else{
  console.log(`${event.target.textContent} off`)
}
})
  
slowButton.addEventListener("click", function(e){
  if(slowLight.classList.toggle("slow")){ 
    console.log(`${event.target.textContent} on`)
}else{
  console.log(`${event.target.textContent} off`)
}
});

goButton.addEventListener("click", function(event){
  if(goLight.classList.toggle("go")){ 
    console.log(`${event.target.textContent} on`)
}else{
  console.log(`${event.target.textContent} off`)
}
});
