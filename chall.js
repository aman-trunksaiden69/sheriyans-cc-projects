gsap.to("#page1 h1",{
    y:60,
    duration:0.3,
    opacity: 1,
    scrollTrigger:{
        trigger:"#page1 h1",
        scroller:"body",
        /*markers:true,*/
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
    
})

gsap.to("#page1 img1",{
    x:-60,
    duration:0.3,
    opacity: 1,
    scrollTrigger:{
        trigger:"#page1 img1",
        scroller:"body",
        /*markers:true,*/
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
    
})

gsap.to("#page1 img2",{
    x:60,
    duration:0.3,
    opacity: 0,
    scrollTrigger:{
        trigger:"#page1 img2",
        scroller:"body",
        /*markers:true,*/
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
    
})

