//Ejecuto paquetes:
const express = require("express");
const router = express.Router();

//USER: HOME:
router.use("/", require("./home.routes.js"));

//USER: LOGIN:
router.use("/login", require("./login.routes.js"));

//USER: REGISTRO DE NUEVO USUARIO:
router.use("/register", require("./register.routes.js"));

//PRODUCT: MODIFICAR UN PRODUCTO EXISTENTE:
router.use("/modifyProduct", require("./modifyProduct.routes.js"));

//PRODUCT: REGISTRO DE NUEVO PRODUCTO:
router.use("/newProduct", require("./newProduct.routes.js"));

//PRODUCT:CARRITO:
router.use("/productCart", require("./productCart.routes.js"));

//PRODUCT:DETALLE DE PRODUCTO:
router.use("/productDetail", require("./productDetail.routes.js"));

//PRODUCT: ÍNDICE DE TODOS LOS PRODUCTOS:
router.use("/productIndex", require("./productindex.routes.js"));


//APIS

router.use('/', require('./api/users'));
router.use('/', require('./api/products'))

//Exporto todo:
module.exports = router;
