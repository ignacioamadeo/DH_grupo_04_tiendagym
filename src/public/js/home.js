/*
window.addEventListener("load", function () {
let logoHeaderHome = document.querySelector(".logoPrincipal");
let headerHome = document.querySelector(".mainHeaderTop")
let subHeaderHome = document.querySelector(".mainHeaderBottom")
let logoHeader = document.querySelector(".logoPrincipal")
let modeButton = document.querySelector(".apaEnce")
let botonesLoginCarrito = document.querySelector(".loginCarrito")
let videoCarritoHome = document.querySelector(".videoCarrousel")

//videoCarritoHome.playbackRate = 0.6; 

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};
// Get the offset position of the navbar
var sticky = subHeaderHome.offsetTop;
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    headerHome.classList.add("sticky");
    subHeaderHome.style.display = "none";
    subHeaderHome.style.transition = "display 3s linear" 
    modeButton.style.display = "none";
    logoHeader.src = "../images/tgym_logos-08.png";
    logoHeader.style.width = "60px";
    logoHeader.style.margin = "0px 0px 0px 8px";

  } else {
    headerHome.classList.remove("sticky");
    modeButton.style.display = "block";
    subHeaderHome.style.display = "flex";
    subHeaderHome.style.transition = "display 3s linear" 
    logoHeader.src = "../images/tgym_logos-03.png";
    logoHeader.style.width = "250px";
    logoHeader.style.margin = "20px 0px 20px 10px";
  }
} 






})
*/