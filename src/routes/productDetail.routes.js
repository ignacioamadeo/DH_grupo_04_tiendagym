/* --- 
RUTAS DEL DETALLE DE PRODUCTO:
--- */

//En el archivo raiz.routes.js defino a través de que http voy a acceder a esta ruta.

//1º Ejecuto paquetes:
const express=require('express');
const router=express.Router();

//2º Importo controlador: 
const productDetailController=require('../controllers/productDetailController.js');

//3º Llamo a la propiedad de ese controlador:
router.get('/:idProductDetail', productDetailController.productDetail);

//4º Exporto todo:
module.exports=router;


//Flujo entero: index.js > app.js > raiz.routes > 👉🏼 ruta > controllers > models > SQL