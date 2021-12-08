window.addEventListener("load", () => {
  let formularioRegister = document.querySelector(
    "form.formValidationRegister"
  );

  formularioRegister.addEventListener("submit", (e) => {

    let exprEmail =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; //expresion regular para validar emails
    let exprImg = /\.(jpg|jpeg|png|gif)$/i; //expresion regular para validar imagenes
    let errores = []; //Acá voy a ir guardando los errores de cada campo con un push

    //Nombre: (obligatorio, al menos 2 caracteres)
    let campoNombre = document.querySelector("input.name"); //Busca en el form la clase name dentro de input
    if (campoNombre.value == "") { //.value me da el valor de ese campo
      errores.push("🏋️ Debes completar el campo Nombre");
    } else if (campoNombre.value.length <= 2) {
      errores.push("El Nombre debe tener al menos 2 caracteres 💪");
    }
    //Apellido: (obligatorio, al menos 2 caracteres)
    let campoApellido = document.querySelector("input.apellido");
    if (campoApellido.value == "") {
      errores.push("🏋️‍♀️ Debes completar el campo Apellido");
    } else if (campoNombre.value.length <= 2) {
      errores.push("El Apellido debe tener al menos 2 caracteres 💪");
    }
    //Mail: (Obligatorio, mail válido)
    let campoEmail = document.querySelector("input.emailF");
    if (campoEmail.value == "") {
      errores.push("🏋️ Debes completar el campo Email");
    } else if (!exprEmail.test(campoEmail.value)) {
      errores.push("Debes agregar un email valido ⛔️");
    }
    //Contraseña: (Obligatoria, mínimo 8 caracteres)
    let campoPassword = document.querySelector("input.contrasenia");
    if (campoPassword.value == "") {
      errores.push("🏋️‍♀️ Debes agregar una contraseña");
    } else if (campoPassword.value.length <= 8) {
      errores.push("La contraseña debe tener al menos 8 caracteres 💪");
    }
    //Imagen: (Opcional, JPG, JPEG, PNG, GIF)
    let campoImagen = document.querySelector("input.fileImagen");
    if (campoImagen.value == "") {
      errores.push("🏋️ Debes agregar una imagen ");
    } else if (!exprImg.test(campoImagen.value)) {
      errores.push("la imagen es invalida ⛔️");
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
    // for (r = 0; r < errores.length; r++) {
    //   document.querySelector('#ulErrores').innerHTML += "<li>" + errores[r] + "</li>"
    // }
  });
});
