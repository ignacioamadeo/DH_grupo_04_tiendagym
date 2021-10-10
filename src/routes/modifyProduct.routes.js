//MODIFICAR UN PRODUCTO EXISTENTE:

//1º Ejecuto paquetes:
const express= require('express');
const router = express.Router();



//2º Importo controlador: 
const productModifyController=require('../controllers/modifyProductController.js');

const upload=require('../middleware/multerProducts');



//3º Llamo a la propiedad de ese controlador:
router.get('/:id', productModifyController.productModify);
router.put('/edit/:id',upload.single('prodFotos'), productModifyController.edit)

router.delete('/delete/:id', productModifyController.destroy)

//4º Exporto todo:
module.exports=router

//En el archivo raiz.routes.js defino a través de que http voy a acceder a esta ruta.