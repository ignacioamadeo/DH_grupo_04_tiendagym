/* --- 
CONTROLADORES PARA MOSTRAR TODOS LOS PRODUCTOS

FUNCIONALIDADES:
📌 1) LISTADO PRODUCTOS DESTACADOS
📌 2) MOSTRAR PRODUCTOS MÁQUINAS
📌 3) MOSTRAR PRODUCTOS YOGA
📌 4) MOSTRAR PRODUCTOS BARRAS
📌 5) MOSTRAR PRODUCTOS INDUMENTARIA

--- */

// (viejo-json) const db=require('../db/baseProductos.json');

//IMPORTO MODELOS: defino carpeta con modelos de Bases de datos.
const db = require("../database/models");
//SEQUELIZE: defino la propiedad "Op" que permite usar operadores de comparación en sequeliza.
const OP = db.Sequelize.Op;
//IMPORTO MODELOS: llamo al modelo de bases de datos de productos.
const { Productos } = require("../models/index");

let productIndexController = {

  //📌 1) PRODUCTOS DESTACADOS:
  destacado: (req, res) => {
    db.Products.findAll({
      where: {
        prodPrecio: { [OP.lte]: 10000 },
      },
      limit: 6,
    })
      .then((product) => {
        res.render("products/listaDestacados", { productInfo: product }); //Renderizo el ejs correspondiente.
      })
      .catch((error) => res.send(error));
  },

  //📌 2) MOSTRAR PRODUCTOS MÁQUINAS:
  productIndex: async (req, res, next) => {
    //    let product=db.filter(item => item.prodCategoria == "#Maq");
    let product = await Productos.allCategory("#Maq");
    res.render("products/productIndex", { productInfo: product });
  },

  //📌 3) MOSTRAR PRODUCTOS YOGA:
  productYoga: async (req, res, next) => {
    // let product=db.filter(item => item.prodCategoria == "#funcPilYog");
    let product = await Productos.allCategory("#funcPilYog");
    res.render("products/productIndex", { productInfo: product });
  },

  //📌 4) MOSTRAR PRODUCTOS BARRAS:
  productBarras: async (req, res, next) => {
    // let product=db.filter(item => item.prodCategoria == "#PesDisBar");
    let product = await Productos.allCategory("#PesDisBar");
    res.render("products/productIndex", { productInfo: product });
  },

  //📌 4) MOSTRAR PRODUCTOS INDUMENTARIA:
  productIndumentaria: async (req, res, next) => {
    // let product=db.filter(item => item.prodCategoria == "#Ind");
    let product = await Productos.allCategory("#Ind");
    res.render("products/productIndex", { productInfo: product });
  },

  //📌 5) MOSTRAR TODOS LOSPRODUCTOS:
  productAll: async (req, res, next) => {
    // let product=db.filter(item => item.prodCategoria == "#Ind");
    let product = await Productos.findAll;
    res.render("products/productIndex", { productInfo: product });
  },
};

//Exporto todo con este nombre:
module.exports = productIndexController;


//Flujo entero: index.js > app.js > raiz.routes(desacople) > ruta > 👉🏼 controllers > models > SQL