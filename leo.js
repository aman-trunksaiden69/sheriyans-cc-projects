var arr = document.querySelectorAll("h1")
var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var btn = document.querySelector("button")
var leo = document.querySelector("#facet")

btn.addEventListener("click",function(){

  var grow = 0;
   
  setInterval(() => {
    if(grow < 100){
        grow++;
        leo.style.width = grow + "%";
        
    }
    else{
        clearInterval();
        
    }
  },50);

})

arr.forEach(function(blow){
    


    main.addEventListener("mousemove",function(node){

        cursor.style.left = node.x + "px"
        cursor.style.top = node.y + "px"
        
        
        })



   blow.addEventListener("mouseenter",function(){
  
   var a = Math.floor(Math.random() *255)
   var b = Math.floor(Math.random() *255)
   var c = Math.floor(Math.random() *255)
   blow.style.color = `rgb(${a}, ${b}, ${c})`
   
     
   cursor.style.scale = "3"

   })
   
   blow.addEventListener("mouseleave",function(){
  
    var a = Math.floor(Math.random() *255)
    var b = Math.floor(Math.random() *255)
    var c = Math.floor(Math.random() *255)
    blow.style.color = `rgb(${a}, ${b}, ${c})`
    
    
    cursor.style.scale = "1"
   
   })

})

