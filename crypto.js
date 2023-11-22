gsap.to("#nav", {
    opacity:0,
    y:60,
    height: "40px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
   })


   var tl = gsap.timeline()

   tl.from("#page1",{
    transform:"translateY(0%) scale(0.15)",
    delay: 0.1,
    duration:3,
    ease: Power4.easeOut,
    borderRadius:"100px",
  })

  tl.from("#card1 #part-1 h1",{
    y:70,
    opacity:0,
    delay:0.2,
    duration:0.5
  
  })

  tl.from("#card1 #part-1 h2",{
    y:70,
    opacity:0,
    delay:0.3,
    duration:0.5
  
  })

  tl.from("#part-2 p",{
    x:70,
    opacity:0,
    delay:0.4,
    duration:0.5
  
  })

  tl.from("#nav",{
    y:-40,
    opacity:1,
    opacity:0,
    delay:0.5,
    duration:0.7,
  })

  tl.from("#page1 #dot3",{
    x:20,
    delay:0.6,
    opacity:0,
    duration:0.5,
  })
  
  gsap.to("#nav2", {
    opacity:0,
    y:-60,
    scrollTrigger: {
        trigger: "#nav2",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
   })

   

  gsap.to("#center2 #so", {
    
   transform: "scale(1.3)",
    y:-50,
    scrollTrigger: {
        trigger: "#center2 #so",
        scroller: "body",
        // markers:true,
        start: "40 10%",
        end: "300 11%",
        scrub: 1
    }
   })

   gsap.to("#center2 #much", {
    
    transform: "rotate(360deg) scale(1.3)",
     
     scrollTrigger: {
         trigger: "#center2 #much",
         scroller: "body",
          //markers:true,
         start: "-30 10%",
         end: "100 11%",
         scrub: 1
     }
    })