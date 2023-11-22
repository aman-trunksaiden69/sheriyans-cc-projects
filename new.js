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

var linediv = document.querySelector(".line-div")
var line = document.querySelector(".line")
var l1 = document.querySelector("#l1")
var l2 = document.querySelector("#l2")
var l3 = document.querySelector("#l3")

var flag = 0

linediv.addEventListener("click",function(){
    if(flag==0){
        l1.style.rotate="45deg"
        l2.style.opacity="0"
        l3.style.rotate="-45deg"
        line.style.marginBottom="-10px"
        flag=1
    }
    else{
        l1.style.rotate="0deg"
        l2.style.opacity="1"
        l3.style.rotate="0deg"
        line.style.marginBottom="5px"
        flag=0
    }
})
gsap.to("#page1 svg", {
   scale:0.1,
   top:"-20%",
  duration: 0.5,
  scrollTrigger: {
      trigger: "#page1 svg1",
      scroller: "#main",
      // markers:true,
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
// var tl = gsap.timeline({
//     scrollTrigger:{
//         trigger:"#page1",
//         scroller:"body",
//         markers:true,
//         start:"top ",
//         end:"top -3%",
//         scrub:2
//     }
// })

// tl.to("#nav svg",{
//     scale:0.2,
//     y:-50
// },"anim")
// tl.to("#nav",{
//     height:"75px",
//     paddingTop:"0",

// },"anim")

var tl = gsap.timeline()
tl.from("#page1 img",{
  scale:0.5,
  delay: 1.5,
  duration:3,
  ease: Power4.easeOut,
  borderRadius:"20px"
})
tl.from("#page1 svg",{
  y:-70,
  opacity:0,
  delay:0.2,
  duration:0.5

})
tl.from("#nav",{
  y:-70,
  opacity:0,
  opacity:0,
  delay:0.3,
  duration:0.5
})
var h2Data = document.querySelectorAll("#page2 h2");
h2Data.forEach(function (elem) {
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
  color: "#E3E3C4",
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#page2 h2 span",
    scroller: "#main",
    // markers: true,
    start: "top 60%",
    end: "top -30%",
    scrub: 2,
  },
}); 

gsap.to("#page2 #svg3,#page2 #svg4",{
  left:"-100vw",
  scrollTrigger:{
    trigger:"#page2 #svg3,#page2 #svg4",
    scroller:"#main",
    scrub:1,
    // markers:true                                

  }

})

var h2Data1 = document.querySelectorAll("#page3 h4");
h2Data1.forEach(function (elem1) {
  var textData1 = elem1.textContent;
  
  var splitedText1 = textData1.split("");

  var clutter1 = "";
  splitedText1.forEach(function (a) {
    clutter1 += `<span>${a}</span>`;
  });
  elem1.innerHTML = clutter1;
  console.log(elem1)
});
gsap.to("#page3 h4 span", {
  color: "#5B6647",
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#page3 h4 span",
    scroller: "#main",
    // markers: true,
    start: "top 60%",
    end: "top -30%",
    scrub: 2,
  },
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




gsap.to("#page6 #svg5,#page6 #svg6",{
  left:"-100vw",
  scrollTrigger:{
    trigger:"#page6 #svg5,#page6 #svg6",
    scroller:"#main",
    scrub:1,
    // markers:true                                

  }

})
var h2Data2 = document.querySelectorAll("#page6 h3");
h2Data2.forEach(function (elem2) {
  var textData2 = elem2.textContent;
  
  var splitedText2 = textData2.split("");

  var clutter2 = "";
  splitedText2.forEach(function (b) {
    clutter2 += `<span>${b}</span>`;
  });
  elem2.innerHTML = clutter2;
  console.log(elem2)
});
gsap.to("#page6 h3 span", {
  color: "#E3E3C4",
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#page6 h3 span",
    scroller: "#main",
    // markers: true,
    start: "top 60%",
    end: "top -30%",
    scrub: 2,
  },
}); 
gsap.to("#page6 #svg7,#page6 #svg8",{
  left:"-100vw",
  scrollTrigger:{
    trigger:"#page6 #svg7,#page6 #svg8",
    scroller:"#main",
    scrub:1,
    // markers:true                                

  }

})
var h2Data3 = document.querySelectorAll("#page7 h2");
h2Data3.forEach(function (elem3) {
  var textData3 = elem3.textContent;
  
  var splitedText3 = textData3.split("");

  var clutter3 = "";
  splitedText3.forEach(function (c) {
    clutter3 += `<span>${c}</span>`;
  });
  elem3.innerHTML = clutter3;
  console.log(elem3)
});
gsap.to("#page7 h2 span", {
  color: "#434B34",
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#page7 h2 span",
    scroller: "#main",
    // markers: true,
    start: "top 60%",
    end: "top -30%",
    scrub: 2,
  },
}); 
gsap.to("#p7-container #p7img1",{
  x:"-50%",
  scrollTrigger:{
       trigger:"#p7-container #p7img1",
       scroller:"#main",
       scrub:2,
      //  markers:true,
       start:"-20% 80%"
  }
})
gsap.to("#p7-container #p7-img2",{
  x:"50%",
  scrollTrigger:{
       trigger:"#p7-container #p7-img2",
       scroller:"#main",
       scrub:2,
      //  markers:true,
       start:"-20% 80%"
  }
})
gsap.to("#p7-container #p7-text",{
  display:"flex",
  opacity:1,
  scrollTrigger:{
       trigger:"#p7-container #p7-text",
       scroller:"#main",
       scrub:2,
      //  markers:true,
       start:"-20% 80%"
  }
})
gsap.to("#page9 #svg9,#page9 #svg10",{
  left:"-100vw",
  scrollTrigger:{
    trigger:"#page9 #svg9,#page9 #svg10",
    scroller:"#main",
    scrub:1,
    // markers:true                                

  }

})
var h2Data4 = document.querySelectorAll("#page9 h3");
h2Data4.forEach(function (elem4) {
  var textData4 = elem4.textContent;
  
  var splitedText4 = textData4.split("");

  var clutter4 = "";
  splitedText4.forEach(function (d) {
    clutter4 += `<span>${d}</span>`;
  });
  elem4.innerHTML = clutter4;
  console.log(elem4)
});
gsap.to("#page9 h3 span", {
  color: "#E3E3C4",
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#page9 h3 span",
    scroller: "#main",
    // markers: true,
    start: "top 60%",
    end: "top -30%",
    scrub: 2,
  },
});
// gsap.from("page11 .p11-content",{
//   // opacity:0,
//   margintop:"-10%",
//   scrollTrigger: {
//     trigger: "#page11 .p11-content",
//     scroller: "#main",
//     // markers: true,
//     start: "top 60%",
//     end: "top -30%",
//     scrub: 2,
//   },
// })