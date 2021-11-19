const db = require("../database/models");

const Productos = {
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

  create: async function (product) {
    const response = db.Products.create({
      ...product,
    });
    return await response;
  },
  update: async function (product, idProduct) {
    const response = db.Products.update(
      {
        ...product,
      },
      {
        where: {
          id: idProduct,
        },
      }
    );
    return await response;
  },
  delete: async function (idProduct) {
    const response = db.Products.destroy({
      where: {
        id: idProduct,
      },
    });
    return await response;
  },
};

module.exports = Productos;
