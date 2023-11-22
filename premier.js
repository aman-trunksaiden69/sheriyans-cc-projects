var flag = 0

document.querySelector("#ass").addEventListener("click",function(){
    if(flag === 0){
        document.querySelector("#misto").style.opacity = "0"
        document.querySelector("#korach").style.opacity = "1"
        document.querySelector("#luthius").style.opacity = "0"
        document.querySelector("#que").innerHTML = "02"
        flag = 1
    }
    else if(flag === 1){
        document.querySelector("#misto").style.opacity = "0"
        document.querySelector("#korach").style.opacity = "0"
        document.querySelector("#luthius").style.opacity = "1"
        document.querySelector("#que").innerHTML = "03"
        flag = 2
    }
    else{
        document.querySelector("#misto").style.opacity = "1"
        document.querySelector("#korach").style.opacity = "0"
        document.querySelector("#luthius").style.opacity = "0"
        document.querySelector("#que").innerHTML = "01"
        flag = 0
    }
  
   
})



