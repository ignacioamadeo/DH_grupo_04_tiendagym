/* --- 
MODELOS DE PRODUCTOS
FUNCIONALIDADES:
ð 1) MOSTRAR TODOS LOS PRODUCTOS
ð 2) CREAR 
ð 3) ACTUALIZAR
ð 3) BORRAR
--- */

//IMPORTO BASE DE DATOS:
//Va a buscar en la carpeta models el archivo "Product.js" que fue exportado con el alias "Products" 
const db = require("../database/models");

//OPERACIONES SOBRE BASE DE DATOS DE PRODUCTOS:
const Productos = {

  //ð 1) MOSTRAR TODOS LOS PRODUCTOS:
  allCategory: async function (text) {
    try {
      return await db.Products.findAll({
        where: {
          prodCategoria: text,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },

  //ð 2) CREAR NUEVOS PRODUCTOS:
  create: async function (product) {
    const response = db.Products.create({
      ...product, //Los 3 puntos son el "spread operator" que trae/asigna todos los valores de ese objeto
    });
    return await response;
  },

  //ð 3) ACTUALIZAR NUEVOS PRODUCTOS:
  update: async function (product, idProduct) {
    const response = db.Products.update(
      {
        ...product,
      },
      {
        where: {
          prodID: idProduct,
        },
      }
    );
    return await response;
  },

  //ð 4) BORRAR NUEVOS PRODUCTOS:
  delete: async function (idProduct) {
    const response = db.Products.destroy({
      where: {
        prodID: idProduct,
      },
    });
    return await response;
  },
};

//EXPORTO MÃDULO:
module.exports = Productos;
