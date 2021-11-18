//REGISTRO DE NUEVO USUARIO:
// const User = require("../models/User");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const { User } = require("../models");

//Renderizo el ejs correspondiente:

let registerController = {
  register: (req, res) => {
    res.render("users/register");
  },
  accepted: async (req, res, next) => {
    try {
      let errors = validationResult(req);
      let userInDB = await User.findByField(req.body.email);
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

      let userToCreate = {
        ...req.body,
        password: await bcrypt.hash(req.body.password, 10),
        image: req.file.filename,
      };

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

/*Recordar que al crear carpetas en views y agregarle archivos, 
la ruta en el controlador debera ser nombrada con el nombre 
de la carpeta a la que pertenece*/

//Exporto todo con este nombre:

module.exports = registerController;
