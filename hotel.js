
// IIFE  - Immediately Invoked Function Expression

function knight(){
  
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
knight();

var l1 = document.querySelector("#line-1")
var l2 = document.querySelector("#line-2")
var l3 = document.querySelector("#line-3")

var flag = 0

var nar = document.querySelectorAll("#nav-1")
nar.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        
      l1.style.rotate="50deg"
      l2.style.opacity="0"
      l3.style.rotate="-50deg"
      
    })

    elem.addEventListener("mouseleave",function(){

      l1.style.rotate="0deg"
      l2.style.opacity="1"
      l3.style.rotate="0deg"

    })

})

gsap.to("#page1 svg", {
  scale:0.1,
  top:"-20%",
 duration: 0.5,
 scrollTrigger: {
     trigger: "#page1 svg1",
     scroller: "#main",
      /*markers:true,*/
     start: "top -10%",
     end: "top -11%",
     scrub: 1
 }
})

gsap.to("#nav", {
 opacity:0,
 height: "90px",
 duration: 0.5,
 delay:1,
 scrollTrigger: {
     trigger: "#nav",
     scroller: "#main",
     // markers:true,
     start: "top -10%",
     end: "top -11%",
     scrub: 1
 }
})

 
/*var tl = gsap.timeline();
tl.from("#page1 svg", {
  y: -40,
  opacity: 0,
  delay: 0.3,
  duration: 0.7,
})
  .from("#page1 img", {
    scale: 0.5,
    delay: -0.1,
    duration: 1.2,
    // ease:Power4,
    ease: Power4.easeOut,
    borderRadius: "10px",
  })
  .from("#nav", {
    y: -50,
    opacity: 0,
    delay: -0.4,
    duration: 0.5,
  });*/

  var tl = gsap.timeline()
  tl.from("#page1 img",{
    scale:0.5,
    delay: 1.5,
    duration:3,
    ease: Power4.easeOut,
    borderRadius:"100px",
  })
  tl.from("#page1 svg",{
    y:-70,
    opacity:0,
    delay:0.2,
    duration:0.5
  
  })
  tl.from("#nav",{
    y:30,
    scale:3,
    opacity:1,
    opacity:0,
    delay:1.2,
    duration:0.7,
  })
  

var h2data = document.querySelectorAll("#page2 h2");
h2data.forEach(function (elem) {
  var textData = elem.textContent;
  var splitedText = textData.split("");
  var clutter = "";
  splitedText.forEach(function (e) {
    clutter += `<span>${e}</span>`;
  });
  elem.innerHTML = clutter;
  console.log(elem)
});

gsap.to("#page2 h2 span", {
  color: "#e3e3c4",
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#page2 h2 span",
    scroller: "#main",
    start: "top 55%",
    end: "top -30%",
    /*markers:true,*/
    scrub: 2,
  },
});

gsap.to("#page2 #svg2,#page2 #svg3", {
  left: "-100vw",
  scrollTrigger: {
    trigger: "#page2 #svg2",
    scroller: "#main",
    scrub: 1,
  }
});


var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

 
  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page5",
      scroller: "#main",
      /*markers: true,*/
      start: "top 60%",
      end: "top 40%",
  
      scrub: 2,
    },
  });
  tl3.to("#page5-left", {
    transform: `translateX(-50%)`,
    duration: 0.8,

  },"page5-anim");
  tl3.to("#page5-right", {
    transform: `translateX(50%)`,
    duration: 0.8,

  },"page5-anim");
  tl3.from("#page5-center", {
    transform: `translateY(30%)`,
    duration: 1,
    opacity:0,
    
  },"page5-anim");


var h5Data1 = document.querySelectorAll("#new-1 h1");
h5Data1.forEach(function (elem1) {
  var textData1 = elem1.textContent;
  var splitedText1 = textData1.split("");
  var clutter1 = "";
  splitedText1.forEach(function (b) {
    clutter1 += `<span>${b}</span>`;
  });
  elem1.innerHTML = clutter1;
  console.log(elem1)
});

gsap.to("#new-1 h1 span", {
  color: "#434B34",
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#new-1 h1 span",
    scroller: "#main",
    /*markers: true,*/
    start: "top 60%",
    end: "top -30%",
    scrub: 2,
  },
});

gsap.to("#new-1 #img-1,#new-1 #img-2,#new-1 #img-3", {
  
  x: 40,
  delay:2,
  opacity:1,
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#new-1 #img-1,#new-1 #img-2,#new-1 #img-3",
    scroller: "#main",
    /*markers: true,*/
    start: "top 60%",
    end: "top -30%",
    scrub: 1,
  },
});


var h6Data3 = document.querySelectorAll("#new-2 h1");
h6Data3.forEach(function (elem3) {
  var textData3 = elem3.textContent;
  var splitedText3 = textData3.split("");
  var clutter3 = "";
  splitedText3.forEach(function (d) {
    clutter3 += `<span>${d}</span>`;
  });
  elem3.innerHTML = clutter3;
  console.log(elem3)
});

gsap.to("#new-2 h1 span", {
  color: "#E3E3C4",
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#new-2 h1 span",
    scroller: "#main",
    /*markers: true,*/
    start: "top 60%",
    end: "top -30%",
    scrub: 2,
  },
});


gsap.to("#new-2 #svg-up-1,#new-2 #svg-up-2", {
  left: "-100vw",
  scrollTrigger: {
    trigger: "#new-2 #svg-up-1,#new-2 #svg-up-2",
    scroller: "#main",
    scrub: 1,
  }
});

gsap.to("#new-2 #svg-down-1,#new-2 #svg-down-2", {
  left: "-100vw",
  scrollTrigger: {
    trigger: "#new-2 #svg-down-1,#new-2 #svg-down-2",
    scroller: "#main",
    scrub: 1,
  }
});

gsap.to("#new-2 #con-1,#new-2 #con-2,#new-2 #con-3,#new-2 #loco", {
  
  y: -60,
  delay:2,
  opacity:1,
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#new-2 #con-1,#new-2 #con-2,#new-2 #con-3,#new-2 #loco",
    scroller: "#main",
    /*markers: true,*/
    start: "top 60%",
    end: "top -30%",
    scrub: 1,
  },
});


var leoData2 = document.querySelectorAll("#new-3 h2");
leoData2.forEach(function (elem2) {
  var textData2 = elem2.textContent;
  var splitedText2 = textData2.split("");
  var clutter2 = "";
  splitedText2.forEach(function (c) {
    clutter2 += `<span>${c}</span>`;
  });
  elem2.innerHTML = clutter2;
  console.log(elem2)
});

gsap.to("#new-3 h2 span", {
  color: "#434B34",
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#new-3 h2 span",
    scroller: "#main",
    start: "top 55%",
    end: "top -5%",
    scrub: 2,
   /*markers:true*/
  },
});

gsap.to("#page7 #svg-up2-1,#page7 #svg-up2-2", {
  left: "-100vw",
  scrollTrigger: {
    trigger: "#page7 #svg-up2-1,#page7 #svg-up2-2",
    scroller: "#main",
    scrub: 1,
  }
});

var h7Data4 = document.querySelectorAll("#page7 h1");
h7Data4.forEach(function (elem4) {
  var textData4 = elem4.textContent;
  var splitedText4 = textData4.split("");
  var clutter4 = "";
  splitedText4.forEach(function (f) {
    clutter4 += `<span>${f}</span>`;
  });
  elem4.innerHTML = clutter4;
  console.log(elem4)
});


gsap.to("#page7 h1 span", {
  color: "#e3e3c4",
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#page7 h1 span",
    scroller: "#main",
    start: "top 55%",
    end: "top -5%",
    scrub: 2,
   /*markers:true*/
  },
});

gsap.to("#page7 #imges-1,#page7 #imges-2,#page7 #imges-3,#page7 #btn", {
  
  y: -30,
  opacity:1,
  scrollTrigger: {
    trigger: "#page7 #imges-1,#page7 #imges-2,#page7 #imges-3,#page7 #btn",
    scroller: "#main",
    /*markers: true,*/
    start: "-180% 30%",
    end: "150% 50%",
    scrub:1,
  },
});

gsap.to("#stick-left img", {
  
  y: -50,
  duration: 0.5,
  opacity:1,
  scrollTrigger: {
    trigger: "#stick-left img",
    scroller: "#main",
    /*markers: true,*/
    start: "-180% 30%",
    end: "150% 50%",
    scrub:2,
  },
});

gsap.to("#elf-2 img", {
  
  y: -50,
  duration: 0.5,
  opacity:1,
  scrollTrigger: {
    trigger: "#elf-2 img",
    scroller: "#main",
    /*markers: true,*/
    start: "-180% 30%",
    end: "150% 50%",
    scrub:2,
  },
});

gsap.to("#page10 #hips", {
  
  y: -70,
  duration: 0.3,
  opacity:1,
  scrollTrigger: {
    trigger: "#page10 #hips",
    scroller: "#main",
    /*markers: true,*/
    start: "-180% 30%",
    end: "150% 50%",
    scrub:1,
  },
});
