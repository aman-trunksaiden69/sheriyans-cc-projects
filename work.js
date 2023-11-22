var lo = document.querySelector("h1")
var btn = document.querySelector("button")

var flag = 0

btn.addEventListener("click",function(){


    var a = Math.floor(Math.random() *255)
    var b = Math.floor(Math.random() *255)
    var c = Math.floor(Math.random() *255)
    lo.style.color = `rgb(${a}, ${b}, ${c})`

    
        
    }
)




gsap.to("#nav1",{
    backgroundColor:"#000",
    height:"100px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav1",
        scroller:"body",
        /*markers:true,*/
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
    
})

gsap.to("#page2 h1",{
    y:60,
    duration:0.5,
    opacity: 1,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
        /*markers:true,*/
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
    
})

gsap.to("#page3 h1",{
    y:60,
    duration:0.5,
    opacity: 1,
    scrollTrigger:{
        trigger:"#page3 h1",
        scroller:"body",
        /*markers:true,*/
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
    
})

gsap.from("#page4 h1",{
    x:60,
    duration:0.5,
    opacity: 1,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        /*markers:true,*/
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
    
})

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

