window.addEventListener('load', function(){
    const menuHamb = document.querySelector('.botonMenuMobile');
    const menu = document.querySelector('.mobMainHeader');
    const logoProfile = document.getElementById('logoHeaderProfile');
    const usuarioLogueado = document.querySelector('.barraProfile');
    const textoLogoProfile = document.querySelector('.userLogHelp');

    menuHamb.onclick = function(e){
        menuHamb.classList.toggle('botonMenuMobileRot');
        menu.classList.toggle('mobMainHeaderAmpliado');
        logoProfile.classList.toggle('logoHeaderProfileShow');
        textoLogoProfile.classList.toggle('userLogHelpNo');
        usuarioLogueado.classList.toggle('barraProfileOff');
    }
   
})