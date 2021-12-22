/* --- 
RUTAS DE CREAR NUEVO PRODUCTO:
--- */

//En el archivo raiz.routes.js defino a través de que http voy a acceder a esta ruta.

//1º Ejecuto paquetes:
const express = require("express");
const router = express.Router();

//2º Importo controlador:
const productNewController = require("../controllers/newProductController.js");
const validaciones = require('../middleware/validacionesProducts');
const upload = require("../middleware/multerProducts");

//3º Llamo a la propiedad de ese controlador:
router.get("/", productNewController.productNew);
router.post("/", upload.single("prodImg"),validaciones, productNewController.create);

router.get("/allProducts", productNewController.all);

//4º Exporto todo:
module.exports = router;

//Flujo entero: index.js > app.js > raiz.routes > 👉🏼 ruta > controllers > models > SQL