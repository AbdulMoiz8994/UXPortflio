// const preloader = document.querySelector(".loading");
const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
const Btn = document.querySelector(".Btn");

// window.addEventListener('mousewheel', checkWidth)
// function checkWidth(e){
//   // console.log("This Width");
//   // console.log(document.documentElement.onwheel);
//   // console.log(window.scrollX + e.pageX);
//   if(e.pageX > 700){
//       Btn.style.display="flex";
//   }else{
//     Btn.style.display="none";
//   }
// }

openMenu.addEventListener("click", shows);
closeMenu.addEventListener("click", closes);

function shows() {
  mainMenu.style.top = "-25px";
}
function closes() {
  mainMenu.style.top = "-1000px";
}

// function myFunction(){
//   const element=document.querySelector(".mainPage");

//   element.scrollLeft = 0;
//   if(element.scrollLeft == 0){
//     Btn.style.display="none";
//   }

// }
// (function () {
//   function scollH(e) {
//     // console.log(e);
//     e.preventDefault();
//     e = window.event || e;
//     let delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
//     document.querySelector(".mainPage").scrollLeft -= delta * 40;
//   }
//   if (document.querySelector(".mainPage").addEventListener) {
//     document
//       .querySelector(".mainPage")
//       .addEventListener("mousewheel", scollH, false);
//     document
//       .querySelector(".mainPage")
//       .addEventListener("DOMMouseScroll", scollH, false);
//   }
// })();
