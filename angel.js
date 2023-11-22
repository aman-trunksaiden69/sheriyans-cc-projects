var a = document.querySelector("h2")
var btn = document.querySelector("button")
var flag = 0

btn.addEventListener("click",function(){

    setTimeout(() => {
        
    if(flag == 0){
    a.innerHTML = "friends🤩"
    a.style.color = "green"
    btn.innerHTML = "remove friend"
    flag = 1
    }
    else {
        a.innerHTML = "stranger!"
        a.style.color = "maroon"
        btn.innerHTML = "add friend"
        flag = 0
    }
},4000);

})