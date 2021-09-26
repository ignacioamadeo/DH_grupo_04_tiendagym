//MODIFICAR UN PRODUCTO EXISTENTE:

//1º Ejecuto paquetes:
const express= require('express');
const router = express.Router();
const multer=require('multer');
const path=require('path');


//2º Importo controlador: 
const productModifyController=require('../controllers/modifyProductController.js');


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
router.get('/:id', productModifyController.productModify);
router.put('/edit/:id',upload.single('prodFotos'), productModifyController.edit)

router.delete('/delete/:id', productModifyController.destroy)

//4º Exporto todo:
module.exports=router

//En el archivo raiz.routes.js defino a través de que http voy a acceder a esta ruta.