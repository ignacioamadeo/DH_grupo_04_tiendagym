//REGISTRO DE NUEVO USUARIO:

//1º Ejecuto paquetes:
const express=require('express');
const router=express.Router();

//2º Importo controlador: 
const registerController=require('../controllers/registerController.js');
const upload=require('../middleware/multerRegister');
const validacion= require('../middleware/validacionesRegister.js')

//3º Llamo a la propiedad de ese controlador:
router.get('/', registerController.register);
router.post('/accepted', upload.single('image') ,validacion, registerController.accepted)

//4º Exporto todo:
module.exports=router;

//En el archivo raiz.routes.js defino a través de que http voy a acceder a esta ruta.