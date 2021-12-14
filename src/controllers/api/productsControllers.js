const { Products, Categories } = require("../../database/models");


const controllers = {
  listProducts: async (req, res) => {
    try {
      let productsList = [];
      let categoryList =[]
      const allProducts = await Products.findAll({
        include: [{association: 'categoria'}]
      });
      const allCategory = await Categories.findAll({
        include: [{association : 'producto'}]
      })


      allProducts.forEach((item) => {
        const list = {
          id: item.prodID,
          name: item.prodNombre,
          description: item.prodDescrip,
        };
        return productsList.push(list);
      });
      allCategory.forEach((item) => {
        const list = {
          id: item.id,
          name: item.name,
          description: item.code,
          productos:item.producto.length
        };
        return categoryList.push(list);
      });

   

      res.status(200).json({
        count: allProducts.length,
        countByCategory : categoryList,
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
