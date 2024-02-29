var toggle;

console.log("Hello World")


var bodyElement = document.querySelector("body");


setInterval(() => {
    bodyElement.classList = [];
    if(toggle){
        bodyElement.classList.add("border")
        toggle = false;
    }else{
        bodyElement.classList.add("greenBack")
        toggle = true;
    }
}, 1000);