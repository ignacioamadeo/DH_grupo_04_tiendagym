//LOGIN:

//1º Ejecuto paquetes:
const express=require('express');
const router=express.Router();

//2º Importo controlador: 
const loginController=require('../controllers/loginController.js');
const guestMiddleware=require('../middleware/guestMiddleware');
const authMiddleware=require('../middleware/authMiddleware');

//3º Llamo a la propiedad de ese controlador:
router.get('/', guestMiddleware ,loginController.login);
router.post('/', loginController.accept);
router.get('/profile', authMiddleware ,loginController.profile);
router.get('/logout', loginController.logout )
//4º Exporto todo:
module.exports=router;

//En el archivo raiz.routes.js defino a través de que http voy a acceder a esta ruta.