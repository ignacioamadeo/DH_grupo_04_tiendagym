window.addEventListener("load", () => {
  let formularioRegister = document.querySelector(
    "form.formValidationRegister"
  );

  formularioRegister.addEventListener("submit", (e) => {
    let exprEmail =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; //expresion regular para validar emails
    let exprImg = /\.(jpg|jpeg|png|gif)$/i; //expresion regular para validar imagenes
    let errores = [];
    let campoNombre = document.querySelector("input.name");
    if (campoNombre.value == "") {
      errores.push("Debes completar el campo Nombre");
    } else if (campoNombre.value.length <= 2) {
      errores.push("El Nombre debe tener al menos 2 cararcteres");
    }
    let campoApellido = document.querySelector("input.apellido");
    if (campoApellido.value == "") {
      errores.push("Debes completar el campo Apellido");
    } else if (campoNombre.value.length <= 2) {
      errores.push("El Apellido debe tener al menos 2 cararcteres");
    }
    let campoEmail = document.querySelector("input.emailF");
    if (campoEmail.value == "") {
      errores.push("Debes completar el campo Email");
    } else if (!exprEmail.test(campoEmail.value)) {
      errores.push("Debes agregar un email valido");
    }
    let campoPassword = document.querySelector("input.contrasenia");
    if (campoPassword.value == "") {
      errores.push("Debes agregar una contraseña");
    } else if (campoPassword.value.length <= 8) {
      errores.push("La contraseña debe tener al menos 8 caracteres");
    }
    let campoImagen = document.querySelector("input.fileImagen");
    if (campoImagen.value == "") {
      errores.push("Debes agregar una imagen");
    } else if (!exprImg.test(campoImagen.value)) {
      errores.push("la imagen es invalida");
    }

    if (errores.length > 0) {
      e.preventDefault();
      let ulErrores = document.querySelector("div.errores ul");
      ulErrores.innerHTML = "";
      errores.forEach((error) => {
        ulErrores.innerHTML += `<li>${error}</li>`;
      });
    }
  });
});
