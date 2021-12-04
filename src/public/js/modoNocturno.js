

window.addEventListener('load', function (){
    const btn = document.querySelector('nav.apaEnce')
    const encendido = document.querySelector('.switchD');
    const apagado = document.querySelector('.switchN');
    const body = document.querySelector('body')
    const naVar = document.querySelector('.mainHeaderTop');
    const naVar1 = document.querySelector('header');
    const naVar2 = document.querySelector('.mainHeaderBottom');
    const naVarA = document.querySelector('ul.menuInferior li');
    const footer = document.querySelector('footer');
    const footerUlLi = document.querySelector('.footerLinks ul li');
    const footerI = document.querySelector('.redesSociales a i');
    
    if(localStorage.getItem('cambiarModo') == 'noche'){
        apagado.style.display = 'block'
        apagado.style.color = 'white'
        encendido.style.display = 'none'
        body.style.backgroundColor = 'black'
        naVar.style. backgroundColor = 'black';
        naVar1.style. backgroundColor = 'black';
        naVar2.style. backgroundColor = '#022B3A';
        naVarA.style.color = 'white';
        footer.style. backgroundColor = '#022B3A';
        footerUlLi.style.color = 'white';
        footerI.style.color = 'white';
    }
    let contador = 1
    btn.addEventListener('click', function (e){ 
       if(contador == 1){
        apagado.style.display = 'block'
        apagado.style.color = 'white'
        encendido.style.display = 'none'
        body.style.backgroundColor = 'black'
        naVar.style. backgroundColor = 'black';
        naVar1.style. backgroundColor = 'black';
        naVar2.style. backgroundColor = '#022B3A';
        naVarA.style.color = 'white';
        footer.style. backgroundColor = '#022B3A';
        footerUlLi.style.color = 'white';
        footerI.style.color = 'white';
        localStorage.setItem('cambiarModo', 'noche' )
       
        contador = 0

       }else{
        contador = 1
        apagado.style.display = 'none'
        encendido.style.display = 'block'
        encendido.style.color = 'white'
        body.style.backgroundColor = 'white'
        naVar.style. backgroundColor = '#022B3A';
        naVar1.style. backgroundColor = '#022B3A';
        naVar2.style. backgroundColor = '#3b5964';
        naVarA.style.color = 'black';
        footer.style. backgroundColor = '#e1e5f2';
        footerUlLi.style.color = '#022B3A';
        footerI.style.color = '#022B3A';
        localStorage.setItem('cambiarModo', 'dia' )
       }
    })
   
    // localStorage.clear()
})
