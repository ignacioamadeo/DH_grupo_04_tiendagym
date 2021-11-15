const db = require("../database/models");

const Productos = {
  create: function (product) {
    const response = db.Products.create({
      ...product,
    });
    return response;
  },
  update: function (product, idProduct) {
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
    return response;
  },
  delete: function (idProduct) {
    const response = db.Products.destroy({
      where: {
        id: idProduct,
      },
    });
    return response;
  },
};

module.exports = Productos;
