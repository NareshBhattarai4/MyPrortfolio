const icon = document.getElementById("icon");
const ul = document.getElementById("ul");
let open = true;


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