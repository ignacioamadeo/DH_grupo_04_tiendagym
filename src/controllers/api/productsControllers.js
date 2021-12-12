const { Products } = require("../../database/models");
const { Productos } = require("../../models");

const controllers = {
  listProducts: async (req, res) => {
    try {
      let productsList = [];
      const allProducts = await Products.findAll();
      allProducts.forEach((item) => {
        const list = {
          id: item.prodID,
          name: item.prodNombre,
          description: item.prodDescrip,
        };
        return productsList.push(list);
      });

      const maq = await Productos.allCategory("#Maq");
      const funcional = await Productos.allCategory("#funcPilYog");
      const pesas = await Productos.allCategory("#PesDisBar");
      const indu = await Productos.allCategory("#Ind");

      res.status(200).json({
        count: allProducts.length,
        countByCategory: {
          maquinas: maq.length,
          funcionalYoga: funcional.length,
          pesasbarras: pesas.length,
          indumentaria: indu.length,
        },
        data: productsList,
        error: null,
        deatail: "/api/products",
        succes: true,
      });
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

  oneProduct: async (req, res) => {
    try {
      const product = await Products.findByPk(req.params.id);

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

module.exports = controllers;
