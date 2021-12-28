/* --- 
CONTROLADORES PARA LOGIN

FUNCIONALIDADES:
📌 1) BÚSQUEDA USUARIO EN BASE (accept)
📌 2) EDITAR USUARIO EXISTENTE (edit)
📌 3) RENDERIZAR PERFIL USUARIO
📌 4) LOGOUT
--- */

// (viejo - JSON) const User = require("../models/User");

//IMPORTO MODELOS: defino carpeta con modelos de Bases de datos.
const { User } = require("../models/index");
//BCRYPT: llamo a paquete bcryps para contraseñas.
const bcrypt = require("bcryptjs");
//EXPRESS-VALIDATOR: Extrae los errores de validación de una solicitud y los pone a disposición en un objeto Result.
const { validationResult } = require("express-validator");

//RENDER: Renderizo el ejs correspondiente:
let loginController = {
  login: (req, res) => {
    console.log(req.cookies);
    res.render("users/login");
  },

  //📌 1) LOGIN:
  accept: async (req, res) => {
    try {
      let admi = await User.admi()
      let userToLogin = await User.findByField(req.body.email); //Buscar usuario por mail.
      let error = validationResult(req);
      if (userToLogin && error.isEmpty()) {
        let isOKThePass = await bcrypt.compare(
          req.body.password,
          userToLogin.password
        );

        if (isOKThePass && error.isEmpty()) {
          delete userToLogin.password;
        
         if( admi.email === userToLogin.email ){
            req.session.userAdmin = admi
          }
          else{
            req.session.userLogged = userToLogin;
            
          }
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

  //📌 2) EDITAR USUARIO EXISTENTE:
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
  
  //📌 3) RENDER PERFIL USUARIO:
  profile: (req, res) => {
    if(req.session.userLogged){

      res.render("users/profile", { user: req.session.userLogged });
    }
    else if (  req.session.userAdmin){
      res.render("users/profile", { user: req.session.userAdmin });
    }
  
  },

  //📌 4) DESLOGUEARSE:
  logout: (req, res) => {
    req.session.destroy();
    res.redirect("/");
  },
};

//Exporto todo con este nombre:
module.exports = loginController;


//Flujo entero: index.js > app.js > raiz.routes(desacople) > ruta > 👉🏼 controllers > models > SQL