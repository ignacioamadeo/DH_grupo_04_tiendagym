//REGISTRO DE NUEVO PRODUCTO:

//1º Ejecuto paquetes:
const express= require('express');
const router = express.Router();
const multer=require('multer');
const path=require('path');

//2º Importo controlador: 
const productNewController = require('../controllers/newProductController.js');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../public/img"));
    },
    filename: function (req, file, cb) {
       
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + file.originalname;
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })




//3º Llamo a la propiedad de ese controlador:
router.get('/', productNewController.productNew);
router.post('/',upload.single('prodFotos') , productNewController.create );

router.get('/allProducts', productNewController.all)

//4º Exporto todo:
module.exports = router

//En el archivo raiz.routes.js defino a través de que http voy a acceder a esta ruta.