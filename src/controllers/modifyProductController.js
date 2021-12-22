/* --- 
CONTROLADORES PARA MODIFICAR PRODUCTO

FUNCIONALIDADES:
📌 1) MODIFICAR PRODUCTO EXISTENTE.
📌 2) EDITAR PRODUCTO EXISTENTE.
📌 3) BORRAR PRODUCTO EXISTENTE.
--- */

//(VIEJO config con JSON):
//let data=require('../db/baseProductos.json')
//const fs=require('fs');
//const path=require('path');

//IMPORTO MODELOS: defino carpeta con modelos de Bases de datos.
const db = require("../database/models");
//IMPORTO MODELOS: llamo al modelo de bases de datos de productos.
const { Productos } = require("../models");
//EXPRESS-VALIDATOR: Extrae los errores de validación de una solicitud y los pone a disposición en un objeto Result.
const { validationResult } = require('express-validator')

//📌 1) MODIFICAR UN PRODUCTO EXISTENTE:

let productModifyController = {

  //MODIFICAR PRODUCTO:
  productModify: (req, res) => {
    let id = req.params.id;
    // let  products = data.find(product => product.prodID  == id)
    db.Products.findByPk(id)
      .then((products) => {
        res.render("products/modifyProduct", { products: products }); //Renderizo EJS correspondiente
      })
      .catch((error) => console.log(error));
  },

  //📌 2) EDITAR PRODUCTO EXISTENTE:
  edit: async (req, res) => {
    
    //(VIEJO config con JSON):
    //     if(req.file){
    //      let id=req.params.id
    //      let product=data.findIndex(item=> item.prodID == id)
    //      const archivo = req.file;

    //      data[product]={
    //       prodID: req.body.prodID,
    //       prodFotos:`../img/${archivo.filename}`,
    //       prodPrecio: "$ " + req.body.prodPrecio,
    //       prodCantidadCuotas: req.body.prodCantidadCuotas,
    //       prodPrecioCuotas: "$ " + req.body.prodPrecioCuotas,
    //       prodNombre:req.body.prodNombre,
    //       prodDescripcion: req.body.prodDescripcion,
    //       prodDescrip1:req.body.prodDescrip1,
    //       prodDescrip2:req.body.prodDescrip2,
    //       prodDescrip3:req.body.prodDescrip3,
    //       prodDescrip4:req.body.prodDescrip4,
    //       prodCategoria: req.body.prodCategoria,
    //       prodDescuento: req.body.prodDescuento,
    //       prodCantidad: req.body.prodCantidad,
    //       envioGratis: req.body.envioGratis,
    //      }

    //      fs.writeFileSync(path.join(__dirname,'../databases/baseProductos.json'), JSON.stringify(data, null, 4), {
    //       encoding: "utf8",
    //     });

    //       res.render('products/allProducts',{productInfo:data})
    //   }
    //   else{
    //     let id=req.params.id
    //     res.redirect(`../${id}`)
    // }

    //nuevo - sequelize: Con uso de sequelize y llamados asincrónicos TRY-CATCH:
    try {
      let errors = validationResult(req);
      let id = req.params.id;
      let producto = {
        ...req.body,
        prodImg: `../img/${req.file.filename}`,
      };
      if (errors.isEmpty()) {
        await Productos.update(producto, id)
        res.redirect("/newProduct/allProducts");
      }
      else {
        let id = req.params.id;
        db.Products.findByPk(id)
          .then((products) => {
            res.render("products/modifyProduct", { products: products, errors: errors.mapped() });
          })
      }

    } catch (error) {
      console.log(error);
    }


  },

  //📌 3) BORRAR PRODUCTO EXISTENTE:
  destroy: async (req, res) => {

    //(viejo config con JSON):
    //      data=data.filter(item=>item.prodID != id)
    //     fs.writeFileSync(
    // 	path.join(__dirname, '../databases/baseProductos.json'),
    // 	JSON.stringify(data, null, 4),
    // 	{
    // 	  encoding: "utf8",
    // 	}
    //         );
    //         res.send('La solicitud fue exitiosa')

    //(nuevo - sequelize): Con uso de sequelize y llamados asincrónicos TRY-CATCH:
    try {
      let id = req.params.id;
      await Productos.delete(id)
      res.redirect("/newProduct/allProducts");

    } catch (error) {
      console.log(error);
    }


  },
};

//Exporto todo con este nombre:
module.exports = productModifyController;


//Flujo entero: index.js > app.js > raiz.routes(desacople) > ruta > 👉🏼 controllers > models > SQL