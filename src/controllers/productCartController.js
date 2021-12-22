/* --- 
CONTROLADORES PARA CARRITO

FUNCIONALIDADES:
📌 1) RENDERIZAR VISTA CARRITO
--- */

let productCartController = {
  //📌 1) RENDER - Renderizo el ejs correspondiente:
  productCart: (req, res) => {
    res.render("products/productCart");
  },
};

//Exporto todo con este nombre:
module.exports = productCartController;


//Flujo entero: index.js > app.js > raiz.routes(desacople) > ruta > 👉🏼 controllers > models > SQL