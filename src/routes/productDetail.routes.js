//DETALLE DE PRODUCTO:

//1º Ejecuto paquetes:
const express=require('express');
const router=express.Router();

//2º Importo controlador: 
const productDetailController=require('../controllers/productDetailController.js');

//3º Llamo a la propiedad de ese controlador:
router.get('/:idProductDetail', productDetailController.productDetail);

//4º Exporto todo:
module.exports=router;

//Nota particular: Volví a dar de alta esta ruta para poder construír la de product index (nacho)