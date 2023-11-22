var lo = document.querySelector("h1")
var rand = document.querySelector("#rand")
var btn = document.querySelector("button")

var flag = 0

btn.addEventListener("click",function(){


    var a = Math.floor(Math.random() *255)
    var b = Math.floor(Math.random() *255)
    var c = Math.floor(Math.random() *255)
    rand.style.backgroundColor = `rgb(${a}, ${b}, ${c})`

    if(flag === 0){
    lo.innerHTML = "i'm your reflection"
    lo.style.fontFamily = "gilroy"
    lo.style.color = "red"
    flag = 1
    }
    else {        
        lo.innerHTML = "who the fuck are you?"
        lo.style.color = "lightseagreen"
        flag = 0
        
    }
})


