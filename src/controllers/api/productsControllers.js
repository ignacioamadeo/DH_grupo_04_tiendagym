/* --- 
APIS PARA EXPORTAR FUNCIONALIDADES DE PRODUCTOS

FUNCIONALIDADES:
📌 1) API PARA CONSULTAR TODOS LOS PRODUCTOS /api/products
📌 2) API PARA CONSULTAR SOLO UN PRODUCTO /api/products/##

--- */

//IMPORTO MODELOS: defino carpeta con modelos de Bases de datos e importo productos y categorías:
const { Products, Categories } = require("../../database/models");


const controllers = {

  //📌 1) MOSTRAR TODOS LOS PRODUCTOS:
  listProducts: async (req, res) => {

    try {
      let productsList = [];
      let categoryList = []

      //Busco los productos en las bases y los guardo en variables:
      const allProducts = await Products.findAll({
        include: [{ association: 'categoria' }]
      });
      const allCategory = await Categories.findAll({
        include: [{ association: 'producto' }]
      })

      //Recorro cada producto para consultar propiedades:
      allProducts.forEach((item) => {
        const list = {
          id: item.prodID,
          name: item.prodNombre,
          description: item.prodDescrip,
        };
        return productsList.push(list);
      });

      //Recorro cada categoría para consultar propiedades:
      allCategory.forEach((item) => {
        const list = {
          id: item.id,
          name: item.name,
          description: item.code,
          productos: item.producto.length
        };
        return categoryList.push(list);
      });

      //Si status es "OK", devolver un json con estos datos:
      res.status(200).json({
        count: allProducts.length,
        countByCategory: categoryList,
        data: productsList,
        error: null,
        deatail: "/api/products",
        succes: true,
      });

      //Si da error, devolver un json con las variables definidas como null:
    } catch (error) {
      res.status(500).json({
        count: null,
        countByCategory: null,
        data: null,
        error: error,
        detail: null,
        succes: false,
      });
    }
  },

  //📌 2) MOSTRAR SOLO UN PRODUCTO:
  oneProduct: async (req, res) => {

    try {
      const product = await Products.findByPk(req.params.id);

      //Si status es "OK", devolver un json con estos datos:
      res.status(200).json({
        data: {
          id: product.prodID,
          name: product.prodNombre,
          description: product.prodDescrip,
        },
        image: {
          url: product.prodImg,
        },
        error: null,
        deatail: `/api/products/${product.prodID}`,
        succes: true,
      });

      //Si da error, devolver un json con las variables definidas como null:
    } catch (error) {
      res.status(500).json({
        data: null,
        image: null,
        error: error,
        detail: null,
        succes: false,
      });
    }
  },
};

//Exportamos todo el módulo:
module.exports = controllers;


//Flujo entero: index.js > app.js > raiz.routes(desacople) > ruta > 👉🏼 controllers > models > SQL