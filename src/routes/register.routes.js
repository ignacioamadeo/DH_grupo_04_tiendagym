/* --- 
RUTAS DE REGISTRO NUEVO USUARIO:
--- */

//En el archivo raiz.routes.js defino a través de que http voy a acceder a esta ruta.

//1º Ejecuto paquetes:
const express = require("express");
const router = express.Router();

//2º Importo controlador:
const registerController = require("../controllers/registerController.js");
const upload = require("../middleware/multerRegister");
const validacion = require("../middleware/validacionesRegister.js");
const guestMiddleware = require("../middleware/guestMiddleware");

//3º Llamo a la propiedad de ese controlador:
router.get("/", guestMiddleware, registerController.register);
router.post(
  "/",
  upload.single("image"),
  validacion,
  registerController.accepted
);

//4º Exporto todo:
module.exports = router;


//Flujo entero: index.js > app.js > raiz.routes > 👉🏼 ruta > controllers > models > SQL