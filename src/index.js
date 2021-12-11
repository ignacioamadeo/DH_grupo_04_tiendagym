//Uso este archivo para dar de alta el servidor y llamar a app.js.

/* --- 
IMPORTO: 
--- */

//IMPORTAR APP.JS- Llamo al contenido del archivo app.js:
const app = require("./app");

/* --- 
CONFIGURACIÓN GENERAL: 
--- */

//CONFIG SERVER - Doy de alta el SERVIDOR LOCAL:
const puerto = process.env.PORT || 3001;
app.listen(puerto, () => console.log(`el puerto ${puerto} esta activo`));
