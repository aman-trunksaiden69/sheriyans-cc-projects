var timer = 60;
var hitnum = 0;
var score = 0;

function handletimer(){
    setInterval(function(){
        
        if(timer>0){
        timer--;
        document.querySelector("#timer").textContent = timer;
        }
    },1000)
}

function getnewhit(){
    hitnum = Math.floor(Math.random() *10);
    document.querySelector("#hitdiv").textContent = hitnum;
}

function increasescore(){
    score = score + 10;
    document.querySelector("#score").textContent = score;
}

function makebubble(){


    for(var i = 1; i<120; i++){
        var rn = Math.floor(Math.random() *10);
        document.querySelector("#btm").innerHTML +=`<div class="bubble">${rn}</div>`;
    }
}

function handelbubbleclick(){
    document.querySelector("#btm").addEventListener("click", function(dets){
          if(dets.target.textContent === hitnum){
            increasescore();
            getnewhit();
            makebubble();
          }
    })
}

makebubble();
handletimer();
getnewhit();
increasescore();