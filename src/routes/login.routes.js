//LOGIN:

//1º Ejecuto paquetes:
const express = require("express");
const router = express.Router();
const upload = require("../middleware/multerRegister");

//2º Importo controlador:
const loginController = require("../controllers/loginController.js"); //Renderizo EJS login.
const guestMiddleware = require("../middleware/guestMiddleware");
const authMiddleware = require("../middleware/authMiddleware");
const validaciones = require('../middleware/validacionesLogin')

//3º Llamo a la propiedad de ese controlador:
router.get("/", guestMiddleware, loginController.login);
router.post("/",validaciones, loginController.accept);
router.get("/profile", authMiddleware, loginController.profile);
router.put('/profile/:id', upload.single("image"), loginController.edit)
router.get("/logout", loginController.logout);
//4º Exporto todo:
module.exports = router;

//En el archivo raiz.routes.js defino a través de que http voy a acceder a esta ruta.
