var a = document.querySelector("#line1")
var b = document.querySelector("#line2")
var c = document.querySelector("#line3")
var r = 0

b.addEventListener("click",function(){
    if(r == 0){
   a.style.rotate = "35deg"
   b.style.opacity = "0"
   c.style.rotate = "-35deg"
   a.style.color = "black"
   r = 1
    }else{
   a.style.rotate = "0deg"
   b.style.opacity = "1"
   c.style.rotate = "0deg"
   r = 0
    }
})