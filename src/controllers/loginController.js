//LOGIN:
// const User = require("../models/User");
const { User } = require("../models/index");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

//Renderizo el ejs correspondiente:

let loginController = {
  login: (req, res) => {
    res.render("users/login");
  },
  accept: async (req, res) => {
    try {
      let userToLogin = await User.findByField(req.body.email);
      let error = validationResult(req);
      if (userToLogin && error.isEmpty()) {
        let isOKThePass = await bcrypt.compare(
          req.body.password,
          userToLogin.password
        );

        if (isOKThePass && error.isEmpty()) {
          delete userToLogin.password;
          req.session.userLogged = userToLogin;
          if (req.body.recordame) {
            res.cookie("recordame", req.body.email, { maxAge: 60000 });
          }
          res.redirect("/");
        } 
        // else {
        //   res.render("users/login", {
        //     errors:error.mapped()
        //   });
        // }
        else {
          res.render("users/login", {
            errors: {
              email: {
                msg: "Las credendicales son inválidas",
              },
            },
          });
        }
      } 
      else {
        res.render("users/login", {
          errors:error.mapped()
        });
      }
      // else {
      //   res.render("users/login", {
      //     errors: {
      //       email: {
      //         msg: "No se encuentra este mail en nuestra base de datos",
      //       },
      //     },
      //   });
      // }
    } catch (error) {
      console.log(error);
    }
  },
  edit: async (req, res) => {
    try {
      let id = req.params.id;
      let userEdit = {
        ...req.body,
        image: req.file.filename,
      };
      let newUser = await User.update(userEdit, id);
      let userToLogin = await User.findByField(req.body.email);
      if (userToLogin) {
        req.session.userLogged = userToLogin;
      }
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  },

  profile: (req, res) => {
    res.render("users/profile", { user: req.session.userLogged });
  },

  logout: (req, res) => {
    req.session.destroy();
    res.redirect("/");
  },
};
/*Recordar que al crear carpetas en views y agregarle archivos, 
la ruta en el controlador debera ser nombrada con el nombre 
de la carpeta a la que pertenece*/

//Exporto todo con este nombre:

module.exports = loginController;
