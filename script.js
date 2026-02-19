
let count = localStorage.getItem("count");
if(count === null){
count=0;
}
else{
    count=parseInt(count);
}

function increase() {
    count++;
    updateDisplay();
}

function decrease() {
    count--;
    updateDisplay();
}

function reset() {
    count = 0;
    updateDisplay();
}

function updateDisplay() {
    let element = document.getElementById("count");
    let decreaseBtn = document.getElementById("decreaseBtn");
    element.innerText = count;
    localStorage.setItem("count",count);
    element.classList.remove("pop-animation");
    void element.offsetWidth;
    element.classList.add("pop-animation");

    if (count < 0) {
        element.style.color = "red";
    } else if (count === 0) {
        element.style.color = "black";
    } else {
        element.style.color = "green";
    }
     if(count===0){
        decreaseBtn.disabled=true;
     }
     else{
        decreaseBtn.disabled=false;
     }
     }
updateDisplay();
 let interval;
 let increaseBtn= document.getElementById("increaseBtn");
 increaseBtn.addEventListener("mousedown",function() { 
    interval=setInterval(increase,100);
 });
 increaseBtn.addEventListener("mouseup",function(){
    clearInterval(interval);
 });
 increaseBtn.addEventListener("mouseleave",function(){
    clearInterval(interval);
 });
 document.addEventListener("keydown",function(event){
    if(event.key === "ArrowUp"){
        increase();

    }
    if(event.key==="ArrowDown"){
        decrease();

    }
 });
 document.getElementById("count").addEventListener("dblclick",function(){
    count +=10;
    updateDisplay();
 });
 
 

