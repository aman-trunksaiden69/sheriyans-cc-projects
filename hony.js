/*function yuvi(){

    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
}
yuvi();*/

var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")


document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x +8 + "px"
    crsr.style.top = dets.y +50 + "px"
    blur.style.left = dets.x -200 + "px"
    blur.style.top = dets.y -150 + "px"
});

var vtar = document.querySelectorAll("#line h4")
vtar.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        
        crsr.style.scale = 5
        elem.style.color = "crimson"
        crsr.style.backgroundColor = "transparent"
    })

    elem.addEventListener("mouseleave",function(){

        crsr.style.scale = 1
        elem.style.color = "black"
        crsr.style.backgroundColor = "crimson"
    })

});


gsap.from("#box-img,#mask",{
    y:90,
    stagger:0.2,
    opacity:0,
    duration:0.3,
    scrollTrigger:{
        trigger:"#box-img",
        scroller:"body",
        /*markers:true,*/
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
});


gsap.to("#nav",{
    backgroundColor:"#fff",
    height:"80px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        /*markers:true,*/
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
});

gsap.from("#heart,#imp",{
    
        x:-50,
        stagger:5,
        opacity:0,
        duration:0.3,
        scrollTrigger:{
            trigger:"#heart",
            scroller:"body",
            /*markers:true,*/
            start:"top 70%",
            end:"top 65%",
            scrub:2
    
        }
    
});


gsap.from(".box",{
    
    x:50,
    scale:0.8,
    opacity:0,
    duration:0.3,
    stagger:0.8,
    scrollTrigger:{
        trigger:".box",
        scroller:"body",
        /*markers:true,*/
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
});



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
});

gsap.from("#page8 h1",{
    y:100,
    scrollTrigger:{
        trigger:"#page8 h1",
        scroller:"body",
        //markers:true,
        start:"top 75%",
        end:"top 65%",
        scrub:4
    }
});

gsap.from("#page10 #radius",{
    y:100,
    duration: 0.3,
    scrollTrigger:{
        trigger:"#page10 #radius",
        scroller:"body",
        //markers:true,
        start:"top 75%",
        end:"top 65%",
        scrub:4
    }
});

gsap.from("#radius img",{
    y:100,
    duration: 0.3,
    opacity: 0,
    scrollTrigger:{
        trigger:"#radius img",
        scroller:"body",
        //markers:true,
        start:"top 75%",
        end:"top 65%",
        scrub:4
    }
});
