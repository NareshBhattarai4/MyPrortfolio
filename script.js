const icon = document.getElementById("icon");
const ul = document.getElementById("ul");
const a=document.querySelectorAll("a");
const actives=document.querySelector("active");

const ficon=document.getElementById("footer-icon");
let open = true;


ficon.addEventListener("click",()=>{
  
window.screenY=1000;
   
})

a.forEach((v)=>{
    v.onclick=()=>{
        v.classList.add("active");
        v.classList.remove("active");
        ul.classList.remove("show");
        icon.classList.replace("fa-close", "fa-bars");
       
    }
})

function myFun() {
    ul.classList.add("show");
    icon.classList.replace("fa-bars", "fa-close");
    open = false;
}
function myFunn() {
    ul.classList.remove("show");
    icon.classList.replace("fa-close", "fa-bars");
    open = true;
}
icon.addEventListener('click', () => {
    if (open) {
        myFun();
    } else {
        myFunn()
    }


})