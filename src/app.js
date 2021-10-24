/* --- 
CONFIGURACIÓN GENERAL DE LA APP: 
--- */

//CONFIG EXPRESS - Llamo paquete Express:
const express = require('express');
const app = express();

//CONFIG SESSION - Llamo a paquete Express-session (para login y cookies):
const session = require('express-session');

//CONFIG PATH - Llamo paquete Path:
const path = require('path');

//CONFIG EJS - Establecer ejs como motor de plantillas:
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "./views")); 

//CONFIG FORMS - Para adaptar métodos PUT y DELETE de forms para html:
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

//CONFIG PUBLIC - Hago pública la carpeta public:
app.use(express.static(path.join(__dirname,'./public'))); 



//CONFIG MIDDLEWARE - :
const userLoggedMiddleware = require('./middleware/userLoggedMiddleware');
const recordameMiddleware = require('./middleware/recordameMiddleware');
app.use(express.json());
app.use(session({ secret: 'shhhh', resave: false, saveUninitialized: false,}))
app.use(userLoggedMiddleware);
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(recordameMiddleware);
/* --- 
RUTEO: 
--- */

//LLAMO a archivo principal de rutas cuando se entra a localhost:3000/
app.use('/', require('./routes/raiz.routes'));


//CONFIG ERROR 404 - redirijo a renderizar pag 404 si viene error:
app.use((req,res,next)=>{
    res.status(404).render('not-found')})


/* --- 
EXPORT: 
--- */

//EXPORTO todo:
module.exports=app;