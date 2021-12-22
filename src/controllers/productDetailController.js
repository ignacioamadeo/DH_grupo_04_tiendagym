/* --- 
CONTROLADORES PARA DETALLES DE PRODUCTOS

FUNCIONALIDADES:
📌 1) RENDERIZAR DETALLES PRODUCTO ESPECÌFICO
--- */

// (viejo - json) const db = require('../db/baseProductos.json')

//IMPORTO MODELOS: llamo al modelo de bases de datos de productos.
const db = require("../database/models");

let productDetailController = {

  //📌 1) Renderizar detalles producto:
  productDetail: (req, res) => {
    
    // (viejo - json) let product = db.find(item => item.prodID == req.params.idProductDetail)

    // (nuevo - sequelize)
    db.Products.findByPk(req.params.idProductDetail)
      .then((product) => {
        res.render("products/productDetail", { product: product }); //RENDER ejs con productos
      })
      .catch((error) => res.send(error));
  },
};

//Exporto todo con este nombre:
module.exports = productDetailController;


//Flujo entero: index.js > app.js > raiz.routes(desacople) > ruta > 👉🏼 controllers > models > SQL