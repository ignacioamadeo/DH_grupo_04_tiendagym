window.addEventListener('load', function(){
    const menuHamb = document.querySelector('.botonMenuMobile');
    const menu = document.querySelector('.mobMainHeader');
    const logoProfile = document.querySelector('.logoHeaderProfile');

    menuHamb.onclick = function(e){
        menuHamb.classList.toggle('botonMenuMobileRot');
        menu.classList.toggle('mobMainHeaderAmpliado');
    }
   
})