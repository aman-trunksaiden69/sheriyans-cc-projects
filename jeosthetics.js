var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")


document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x +8 + "px"
    crsr.style.top = dets.y +20 + "px"
    blur.style.left = dets.x - 200 + "px"
    blur.style.top = dets.y - 200 + "px"
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        
        crsr.style.scale = 5
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })

    elem.addEventListener("mouseleave",function(){
        
        crsr.style.scale = 1
        crsr.style.border = "1px solid #95c11e"
        crsr.style.backgroundColor = "#95c11e"
    })

})


gsap.to("#nav",{
    backgroundColor:"#000",
    height:"100px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        /*markers:true,*/
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
    
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        /*markers:true,*/
        start:"top -25%",
        end: "top -70%",
        scrub:2
    }
})

gsap.from("#about-us img,#about-inn",{
    y:90,
    opacity:0,
    duration:0.3,
    stagger:0.2,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        /*markers:true,*/
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:0.3,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        /*markers:true,*/
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        //markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4

    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        //markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4

    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        //markers:true,
        start:"top 75%",
        end:"top 65%",
        scrub:4
    }
})

gsap.from("#foodzone img",{
    y:80,
    opacity:"0",
    scrollTrigger:{
        trigger:"#foodzone img",
        scroller:"body",
        //markers:true,
        start:"top 75%",
        end:"top 65%",
        scrub:2
    }
})