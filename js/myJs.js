const hide = document.querySelector(".hide");
const menu = document.querySelector(".menu-icon");
const close = document.querySelector(".close");

hide.style.display="none";



menu.addEventListener( "click", () => {
    hide.style.display="block";
});

close.addEventListener("click",() =>{
    hide.style.display="none";
});