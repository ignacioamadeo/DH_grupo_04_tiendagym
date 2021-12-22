/* --- 
CONTROLADORES HOME SITIO

FUNCIONALIDADES:
📌 1) RENDER
📌 2) BUSCADOR
--- */

// (viejo) con JSON: const data=require('../db/baseProductos.json')

//IMPORTO MODELOS: defino carpeta con modelos de Bases de datos.
const db = require("../database/models");
//SEQUELIZE: defino la propiedad "Op" que permite usar operadores de comparación en sequeliza.
const OP = db.Sequelize.Op;

//📌 1) RENDER: Renderizo el ejs correspondiente:
let homeController = {
  home: (req, res, next) => {
    res.render("users/home");
  },

  //📌 2) BUSCADOR:
  search: (req, res, next) => {

    let busqueda = req.query.search;
    // let productsResults = [];

    db.Products.findAll({
      where: {
        prodNombre: { [OP.like]: `%${busqueda}%` },
      },
    })
      .then((resultados) => {
        res.render("products/search", { productInfo: resultados });
      })
      .catch((error) => res.send(error));

    /* (viejo) con JSON:
    // for (let i = 0; i < data.length; i++) {
    //     let products = data[i].prodNombre.toLowerCase()
    //     if (products.includes(busqueda)) {
    //         productsResults.push(data[i])
    //     }
    // }*/
  },

  construction: (req, res) => {
    res.render("pagConstruc");
  },
};

//Exporto todo con este nombre:
module.exports = homeController;


//Flujo entero: index.js > app.js > raiz.routes(desacople) > ruta > 👉🏼 controllers > models > SQL