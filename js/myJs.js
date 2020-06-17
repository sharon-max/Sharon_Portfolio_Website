// const hide = document.querySelector(".hide");
// const menu = document.querySelector(".menu-icon");
// const close = document.querySelector(".close");

// hide.style.display="none";



// menu.addEventListener( "click", () => {
//     hide.style.display="block";
// });

// close.addEventListener("click",() =>{
//     hide.style.display="none";
// });

function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

const tel = document.querySelector('.tel');

tel.addEventListener('click', (e) => {
  if(window.innerWidth > 1000){
    e.preventDefault();
    alert('my phone number is')
  }
})