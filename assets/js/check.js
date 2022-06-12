const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
const preloader=document.querySelector(".loading");


openMenu.addEventListener("click", shows);
closeMenu.addEventListener("click", closes);

function shows() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
  mainMenu.style.left = "-18px";
}
function closes() {
  mainMenu.style.top = "-100%";
}

function loadFunc(){
    preloader.style.display="none";
 }