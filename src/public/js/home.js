//Seleciono video principal de la homepage:
var imagen = document.querySelector('.homeCont1');

//2º Se ejecuta función:
function fadeOutOnScroll(element) {
  if (!element) {
    return;
  }
  
  //3ºCalculo la distancia del tope del elemento al tope de la ventana:
  var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
  //3ºAltura del elemento:
  var elementHeight = element.offsetHeight;
  //3ºDistancia scrolleada para comparar con el alto del elemento:
  var scrollTop = document.documentElement.scrollTop;
  
  //4ºSeteo opacidad inicial:
  var opacity = 1;
  
  //5ºCálculo/seteo de opacidad:
  if (scrollTop > distanceToTop) {
    opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
  }
  
  if (opacity >= 0) {
    element.style.opacity = opacity;
  }
}

//2º Se ejecuta scrollHandler 
function scrollHandler() {
  fadeOutOnScroll(imagen);
}

//1º Cuando el usuario scrollea, se ejecuta la función scrollHandler
window.addEventListener('scroll', scrollHandler); 
