/* --- 
APIS PARA EXPORTAR FUNCIONALIDADES DE PRODUCTOS

FUNCIONALIDADES:
📌 1) API PARA CONSULTAR TODOS LOS USUARIOS /api/users
📌 2) API PARA CONSULTAR SOLO UN USUARIO /api/users/##

--- */

//IMPORTO MODELOS: defino carpeta con modelos de Bases de datos e importo usuarios:
const { Users } = require("../../database/models");

const controllers = {

  //📌 1) MOSTRAR TODOS LOS USUARIOS:
  list: async (req, res) => {

    try {
      let listUsers = [];

      //Busco los usuarios en las bases y los guardo en variables:
      const users = await Users.findAll();

      //Recorro cada usuario para consultar propiedades:
      users.forEach((item) => {
        let list = {
          id: item.userID,
          name: item.firstName,
          apellido: item.lastName,
          email: item.email,
          username: item.username,
        };
        return listUsers.push(list);
      });

      //Si status es "OK", devolver un json con estos datos:
      res.status(200).json({
        count: users.length,
        data: listUsers,
        error: null,
        detail: "/api/users", //URL API
        succes: true,
      });

      //Si da error, devolver un json con las variables definidas como null:
    } catch (error) {
      res
        .status(500)
        .json({
          count: null,
          data: null,
          error: error,
          detail: null,
          succes: false,
        });
    }
  },

  //📌 2) MOSTRAR SOLO 1 USUARIO:
  user: async (req, res) => {

    try {
      const user = await Users.findByPk(req.params.id);

      //Si status es "OK", devolver un json con estos datos:
      res.status(200).json({
        data: {
          id: user.userID,
          name: user.firstName,
          lastName: user.lastName,
          email: user.email,
          username: user.username,
          image: {
            url: user.image,
          },
        },
        error: null,
        detail: `/api/users/${user.userID}`,
        succes: true,
      });

      //Si da error, devolver un json con las variables definidas como null:
    } catch (error) {
      res
        .status(500)
        .json({ data: null, error: error, detail: null, succes: false });
    }
  },
};

//Exporto módulo:
module.exports = controllers;


//Flujo entero: index.js > app.js > raiz.routes(desacople) > ruta > 👉🏼 controllers > models > SQL