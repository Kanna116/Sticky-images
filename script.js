var menu = document.querySelector("#menu")
var isClicked = false
menu.addEventListener("click",function menuBar()  {
    isClicked = !isClicked;
    if (isClicked) {
        document.querySelector("#top").style.transform = "rotateZ(45deg) translate(25px,20px)"
        document.querySelector("#middle").style.transform = "translate(50px)"
        document.querySelector("#middle").style.opacity = "0"
        document.querySelector("#bottom").style.transform = "rotateZ(-45deg) translate(25px,-20px)"
        document.querySelector("#bottom").style.background = "#e76f51"
        document.querySelector("#top").style.background = "#e76f51"
        document.querySelector("#middle").style.background = "#e76f51"
    }
    else{
        document.querySelector("#top").style.transform = "unset"
        document.querySelector("#middle").style.transform = "unset"
        document.querySelector("#middle").style.opacity = "unset"
        document.querySelector("#middle").style.background = "#000000"
        document.querySelector("#bottom").style.transform = "unset"
        document.querySelector("#bottom").style.background = "#000000"
        document.querySelector("#top").style.background = "#000000"
    }
})
