var timer = 60;
var score = 0;
var hitrn = 0;

//jispe click karoge vo elemt event raise hoga or evntlitsner na milne per event elemt ke parents per lsitner
//dhunedega or vaha bhi na milne per event parent ke parents ke parent per listner dhundega
// black is string
// nila is number

function increasescore(){
    score +=10;
    document.querySelector("#scorevalue").textContent = score;
}


function getnewhit(){

 hitrn = Math.floor(Math.random()*60);
 document.querySelector("#hitvalue").textContent = hitrn;
}


function makebubble(){

var rand = "";

for(var i =1; i<=160; i++) {
    var rn = Math.floor(Math.random()*60)
    rand +=  `<div class="bubble">${rn}</div>`;
}

document.querySelector("#panel-bottom").innerHTML = rand;

}


function runtime(){
    var timerinterval = setInterval(function(){
        
        if(timer >0){
        
        timer--;
        document.querySelector("#timervalue").textContent = timer;

        }
        else{
            clearInterval(timerinterval);
           // document.querySelector("#panel-bottom").innerHTML = `<h1>Game over</h1>`;//
        }

    },1000);
}

document.querySelector("#panel-bottom")
.addEventListener("click",function(dets){
    var clicknum = Number(dets.target.textContent);
    if(clicknum === hitrn){
        increasescore();
        makebubble();
        getnewhit();
    }
});

getnewhit();
runtime();
makebubble();
