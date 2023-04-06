let stopButton = document.getElementById("stopButton");
let slowButton= document.getElementById("slowButton")
let goButton= document.getElementById("goButton")
let stopLight = document.getElementById("stopLight");

stopButton.addEventListener("click", function(){
  if(stopLight.classList.toggle("stop")){ 
    console.log(`${this.textContent} on`)
}else{
  console.log(`${this.textContent} off`)
}
  
});
stopButton.addEventListener('mouseenter', function(){
  console.log(`Entered ${this.textContent} button`)
})
stopButton.addEventListener('mouseleave', function(){
  console.log(`Left ${this.textContent} button`)
})

slowButton.addEventListener("click", function(){
  if(slowLight.classList.toggle("slow")){ 
    console.log(`${this.textContent} on`)
}else{
  console.log(`${this.textContent} off`)
}
});
slowButton.addEventListener('mouseenter', function(){
  console.log(`Entered ${this.textContent} button`)
})
slowButton.addEventListener('mouseleave', function(){
  console.log(`Left ${this.textContent} button`)
})

goButton.addEventListener("click", function(){
  if(goLight.classList.toggle("go")){ 
    console.log(`${this.textContent} on`)
}else{
  console.log(`${this.textContent} off`)
}
});
goButton.addEventListener('mouseenter', function(){
  console.log(`Entered ${this.textContent} button`)
})
goButton.addEventListener('mouseleave', function(){
  console.log(`Left ${this.textContent} button`)
})
