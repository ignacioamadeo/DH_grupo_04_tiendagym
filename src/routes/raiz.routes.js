//Ejecuto paquetes:
const express=require('express');
const router=express.Router();

//HOME:
router.use('/', require('./home.routes.js'));

//CARRITO:
router.use('/productCart',require('./productCart.routes.js'));

//DETALLE DE PRODUCTO:
router.use('/productDetail', require('./productDetail.routes.js'));

//LOGIN:
router.use('/login', require('./login.routes.js'));

//ÍNDICE DE TODOS LOS PRODUCTOS:
router.use('/productIndex', require('./productindex.routes.js'));

//REGISTRO DE NUEVO USUARIO:
router.use('/register', require('./register.routes.js'));

//REGISTRO DE NUEVO PRODUCTO:
router.use('/newProduct', require('./newProduct.routes.js'));

//MODIFICAR UN PRODUCTO EXISTENTE:
router.use('/modifyProduct', require('./modifyProduct.routes.js'));

//Exporto todo:
module.exports=router;