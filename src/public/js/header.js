  /* ---
  ACHICAR HEADER EN SCROLL:
  --- */

window.addEventListener("load", function () { //Cuando se carga la página, ejectutar:

  let headerHome = document.querySelector(".mainHeader")
  let logoHeader = document.querySelector(".logoPrincipal")
  let modeButton = document.querySelector(".apaEnce")
  let primeraSeccion = document.querySelector(".homeCont1")
  let bodyHome = document.querySelector(".bodyHome")
  let busqueda = document.querySelector(".busqueda")
  let switchModoA = document.querySelector(".switchD")
  //let logoLogin = document.querySelector(".logoHeaderProfile")

  // When the user scrolls the page, execute myFunction
  window.onscroll = function () { achicarHeader() };

  //
  function checkMediaQuery() {
    // If the inner width of the window is greater then 768px
    if (window.innerWidth > 768) {
      // Then log this message to the console
      console.log('Media Query Matched!')
    }
  }
  window.addEventListener('resize', checkMediaQuery());

  // Devuelve la distancia del elemento al borde exterior del elemento que lo contiene
  let position = primeraSeccion.offsetTop;

  function achicarHeader() {
    //pageYOffset devuelve la cantidad de pixels scrolleados.
    if (window.pageYOffset > position) {
      //Luego de scrollear:
      headerHome.style.height = "60px";
      busqueda.style.margin = "0 0 11px 0";
      switchModoA.style.margin = "auto 0px 10px 50px"
      //logoLogin.style.margin = "auto 0px 7px 0px "
      logoHeader.style.maxHeight = "50px"
      logoHeader.style.margin = "auto 170px auto 10px"
      logoHeader.src = "../images/tgym_logos_solo.png"
    } else {
      //Estado inicial:
      headerHome.style.height = "100px";
      busqueda.style.margin = "auto 0 auto 0";
      switchModoA.style.margin = "auto 0px auto 50px"
      //logoLogin.style.margin = "auto 0px auto 0px"
      logoHeader.style.maxHeight = "68px"
      logoHeader.style.margin = "auto 0px auto 10px"
      logoHeader.src = "../images/tgym_logos-12.png"

    }
  }

})
