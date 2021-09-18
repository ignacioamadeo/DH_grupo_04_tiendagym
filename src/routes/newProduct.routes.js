//REGISTRO DE NUEVO PRODUCTO:

//1º Ejecuto paquetes:
const express= require('express');
const router = express.Router();

//2º Importo controlador: 
const productCartController=require('../controllers/newProductController.js');

//3º Llamo a la propiedad de ese controlador:
router.get('/', productCartController.productCart);

//4º Exporto todo:
module.exports=router

//En el archivo raiz.routes.js defino a través de que http voy a acceder a esta ruta.