/* --- 
CONTROLADORES PARA REGISTRAR NUEVO USUARIO

FUNCIONALIDADES:
📌 1) REGISTRAR NUEVO USUARIO

--- */

// (viejo-json) const User = require("../models/User");

//EXPRESS-VALIDATOR: Extrae los errores de validación de una solicitud y los pone a disposición en un objeto Result.
const { validationResult } = require("express-validator");
//BCRYPT: llamo a paquete bcryps para contraseñas.
const bcrypt = require("bcryptjs");
//IMPORTO MODELOS: defino carpeta con modelos de Bases de datos.
const { User } = require("../models");


//Renderizo el ejs correspondiente:

let registerController = {

  //📌 1) REGISTRAR NUEVO USUARIO:
  register: (req, res) => {
    res.render("users/register"); //Renderizar ejs correspondiente
  },
  accepted: async (req, res, next) => {
    try {
      let errors = validationResult(req);
      let userInDB = await User.findByField(req.body.email); //Buscar si ya existe el mail
      if (userInDB) {
        res.render("users/register", {
          errors: {
            email: {
              msg: "Este email ya esta registrado",
            },
          },
          old: req.body,
        });
      }

      //Datos de nuevo usuario:
      let userToCreate = {
        ...req.body,
        password: await bcrypt.hash(req.body.password, 10),
        image: `../imgRegister/${req.file.filename}`,
      };

      //Si no hay errores entonces crear usuario:
      if (errors.isEmpty()) {
        let userCreate = await User.create(userToCreate);
        res.redirect("/login");
      } else {
        res.render("users/register", {
          errors: errors.mapped(),
          old: req.body,
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
};

//Exporto todo con este nombre:
module.exports = registerController;


//Flujo entero: index.js > app.js > raiz.routes(desacople) > ruta > 👉🏼 controllers > models > SQL