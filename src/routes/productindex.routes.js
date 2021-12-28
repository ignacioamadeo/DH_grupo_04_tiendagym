/* --- 
RUTAS DEL INDEX:
--- */

//En el archivo raiz.routes.js defino a través de que http voy a acceder a esta ruta.

//1º Ejecuto paquetes:
const express=require('express');
const router=express.Router();

//2º Importo controlador: 
const productIndexController=require('../controllers/productIndexController.js');

//3º Llamo a la propiedad de ese controlador:
router.get('/maquinas', productIndexController.productIndex);

router.get('/yoga', productIndexController.productYoga);

router.get('/barras', productIndexController.productBarras);

router.get('/indumentaria', productIndexController.productIndumentaria);

router.get('/desatcado', productIndexController.destacado);

router.get('/all', productIndexController.productAll);


//4º Exporto todo:
module.exports=router;


//Flujo entero: index.js > app.js > raiz.routes > 👉🏼 ruta > controllers > models > SQL