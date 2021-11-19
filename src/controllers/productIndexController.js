//ÍNDICE DE TODOS LOS PRODUCTOS:

//Llamo a la base de datos (en este caso objeto json) y la asigno a la variable db:

// const db=require('../db/baseProductos.json');

const db = require("../database/models");
const OP = db.Sequelize.Op;
const { Productos } = require("../models/index");

//Renderizo el ejs correspondiente:

let productIndexController = {
  destacado: (req, res) => {
    db.Products.findAll({
      where: {
        prodPrecio: { [OP.lte]: 10000 },
      },

      limit: 6,
    })
      .then((product) => {
        res.render("products/listaDestacados", { productInfo: product });
      })
      .catch((error) => res.send(error));
  },
  productIndex: async (req, res, next) => {
    //    let product=db.filter(item => item.prodCategoria == "#Maq");
    let product = await Productos.allCategory("#Maq");
    res.render("products/productIndex", { productInfo: product });
  },
  productYoga: async (req, res, next) => {
    // let product=db.filter(item => item.prodCategoria == "#funcPilYog");
    let product = await Productos.allCategory("#funcPilYog");
    res.render("products/productIndex", { productInfo: product });
  },
  productBarras: async (req, res, next) => {
    // let product=db.filter(item => item.prodCategoria == "#PesDisBar");
    let product = await Productos.allCategory("#PesDisBar");
    res.render("products/productIndex", { productInfo: product });
  },
  productIndumentaria: async (req, res, next) => {
    // let product=db.filter(item => item.prodCategoria == "#Ind");
    let product = await Productos.allCategory("#Ind");
    res.render("products/productIndex", { productInfo: product });
  },
};

/*Recordar que al crear carpetas en views y agregarle archivos, 
la ruta en el controlador debera ser nombrada con el nombre 
de la carpeta a la que pertenece*/

//Exporto todo con este nombre:

module.exports = productIndexController;
