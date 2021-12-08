window.addEventListener("load", () => {
    let formularioCreateProduct = document.querySelector(
      "form.formValidationCreateProduct"
    );
  
    formularioCreateProduct.addEventListener("submit", (e) => {
  
      let exprImg = /\.(jpg|jpeg|png|gif)$/i; //expresion regular para validar imagenes
      let errores = []; //Acá voy a ir guardando los errores de cada campo con un push
  
      //Nombre: (obligatorio, al menos 2 caracteres)
      let campoNombre = document.querySelector("input.name"); //Busca en el form la clase name dentro de input
      if (campoNombre.value == "") { //.value me da el valor de ese campo
        errores.push("🏋️ Debes completar el campo Nombre");
      } else if (campoNombre.value.length <= 2) {
        errores.push("El Nombre debe tener al menos 2 caracteres 💪");
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
      for (r = 0; r < errores.length; r++) {
        document.querySelector('#ulErrores').innerHTML += "<li>" + errores[r] + "</li>"
      }
    });
  });
  