window.addEventListener("load", function () {
let logoHeaderHome = document.querySelector(".logoPrincipal");
let headerHome = document.querySelector(".mainHeaderTop")
let subHeaderHome = document.querySelector(".mainHeaderBottom")
let logoHeader = document.querySelector(".logoPrincipal")
let modeButton = document.querySelector(".apaEnce")
let botonesLoginCarrito = document.querySelector(".loginCarrito")


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};
// Get the offset position of the navbar
var sticky = subHeaderHome.offsetTop;
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    headerHome.classList.add("sticky");
    logoHeaderHome.style.display = "none";
    subHeaderHome.style.display = "none";
    logoHeader.src = "";

  } else {
    headerHome.classList.remove("sticky");
    logoHeaderHome.style.display = "block";
    modeButton.style.display = "block";
    subHeaderHome.style.display = "flex";
    logoHeader.src = "../images/tgym_logos-03.png";
  }
} 






})