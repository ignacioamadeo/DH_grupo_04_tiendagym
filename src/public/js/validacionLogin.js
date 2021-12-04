window.addEventListener("load", () => {
  let formularioLogin = document.querySelector(
    ".formValidationLogin"
  );

  formularioLogin.addEventListener("submit", (e) => {

    let exprEmail =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; //expresion regular para validar emails
    let errores = []; //Acá voy a ir guardando los errores de cada campo con un push

    //Mail: (Obligatorio, mail válido)
    let campoEmail = document.querySelector("input.emailL");
    if (campoEmail.value == "") {
      errores.push("🏋️ Debes completar el campo Email");
    } else if (!exprEmail.test(campoEmail.value)) {
      errores.push("El email no es válido ⛔️");
    }
    //Contraseña: (Obligatoria, mínimo 8 caracteres)
    let campoPassword = document.querySelector("input.contrasenia");
    if (campoPassword.value == "") {
      errores.push("🏋️‍♀️ Debes agregar la contraseña");
    } else if (campoPassword.value.length <= 8) {
      errores.push("La contraseña no tiene 8 caracteres 💪");
    }

    //Chequeo si hay errores en algo de lo anterior para evitar que se envíe el formulario:
    if (errores.length > 0) {
      e.preventDefault();
      let ulErrores = document.querySelector("div.errores ul");
      ulErrores.innerHTML = "";
      errores.forEach((error) => {
        ulErrores.innerHTML += `<li>${error}</li>`;
      });
    }
    //Recorro todos los valores guardados en Errores para mostrar todos los errores uno debajo del otro:
    for (r = 0; r < errores.length; r++) {
      document.querySelector('#ulErrores').innerHTML += "<li>" + errores[r] + "</li>"
    }
  });
});
