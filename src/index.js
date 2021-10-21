/* Uso este archivo para dar de alta 
el servidor y llamar a app.js. */

//IMPORTAR APP.JS- Llamo al contenido del archivo app.js:
const app = require ('./app');

//CONFIG SERVER - Doy de alta el SERVIDOR LOCAL:
const puerto = process.env.PORT || 3000;
app.listen(puerto,()=>
    console.log(`el puerto ${puerto} esta activo`)
);
