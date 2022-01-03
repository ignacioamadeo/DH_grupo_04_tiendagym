window.addEventListener('load', function(){
    const menuHamb = document.querySelector('.botonMenuMobile');
    const menu = document.querySelector('.mobMainHeader');
    const logoProfile = document.getElementById('logoHeaderProfile'); //Logo 
    const textoLogoProfile = document.querySelector('.userLogHelp'); //Texto "usuario no ingresado"
    const usuarioLogueado = document.getElementById('barraProfile'); //Perfil usuario

    menuHamb.onclick = function(e){
        menuHamb.classList.toggle('botonMenuMobileRot');
        menu.classList.toggle('mobMainHeaderAmpliado');
        logoProfile?.classList.toggle('logoHeaderProfileShow');
        textoLogoProfile?.classList.toggle('userLogHelpNo');
        usuarioLogueado.classList.toggle('barraProfileOff');
    }
   
})