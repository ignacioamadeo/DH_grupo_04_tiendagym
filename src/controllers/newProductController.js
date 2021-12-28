/* --- 
CONTROLADORES PARA CRER NUEVO PRODUCTO

FUNCIONALIDADES:
📌 1) RENDERIZAR PRODUCTOS
📌 2) CREAR NUEVO PRODUCTO
--- */

//(viejo config con JSON):
// const fs=require('fs');
// const data=require('../db/baseProductos.json');
// const path=require('path');

//IMPORTO MODELOS: llamo al modelo de bases de datos de productos.
const { Productos } = require("../models/index");
//IMPORTO MODELOS: defino carpeta con modelos de Bases de datos.
const db = require("../database/models");
//EXPRESS-VALIDATOR: Extrae los errores de validación de una solicitud y los pone a disposición en un objeto Result.
const { validationResult } = require("express-validator");

let productNewController = {
  //📌 1) RENDER: Renderizo el ejs correspondiente:
  productNew: (req, res) => {
    res.render("products/newProduct");
  },

  //(VIEJO config con JSON):
  // create:(req,res,next)=>{
  //     if(req.file){
  //     const archivo = req.file;
  //    let producto={
  //     prodID: req.body.prodID,
  //     prodFotos:`../img/${archivo.filename}`,
  //     prodPrecio: "$ " + req.body.prodPrecio,
  //     prodCantidadCuotas: req.body.prodCantidadCuotas,
  //     prodPrecioCuotas: "$ " + req.body.prodPrecioCuotas,
  //     prodNombre:req.body.prodNombre,
  //     prodDescripcion: req.body.prodDescripcion,
  //     prodDescrip1:req.body.prodDescrip1,
  //     prodDescrip2:req.body.prodDescrip2,
  //     prodDescrip3:req.body.prodDescrip3,
  //     prodDescrip4:req.body.prodDescrip4,
  //     prodCategoria: req.body.prodCategoria,
  //     prodDescuento: req.body.prodDescuento,
  //     prodCantidad: req.body.prodCantidad,
  //     envioGratis: req.body.envioGratis
  //    }

  //    data.push(producto);
  //    fs.writeFileSync(path.join(__dirname,'../databases/baseProductos.json'), JSON.stringify(data, null, 4), {
  //     encoding: "utf8",
  //   });

  //     res.redirect('./newProduct/allProducts')
  // }
  // else{
  //     res.render('products/newProduct')
  // }
  // },

  //nuevo - sequelize: con Sequelize busco todos los productos en la base de datos.
  all: (req, res) => {
    db.Products.findAll()
      .then((data) => {
        res.render("products/allProducts", { productInfo: data });
      })
      .catch((error) => console.log(error));
  },

  //📌 2) CREAR NUEVO PRODUCTO:
  create: async (req, res) => {
    try {
      let errors = validationResult(req);
      let producto = {
        ...req.body,
        prodImg: `../img/${req.file.filename}`,
      };
      if (errors.isEmpty()) {
        console.log(producto);
        await Productos.create(producto);
        res.redirect("./newProduct/allProducts");
      } else {
        res.render("products/newProduct", { errors: errors.mapped() });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: error });
    }
  },
};

//Exporto todo con este nombre:
module.exports = productNewController;

//Flujo entero: index.js > app.js > raiz.routes(desacople) > ruta > 👉🏼 controllers > models > SQL
