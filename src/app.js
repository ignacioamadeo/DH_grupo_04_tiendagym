const express=require('express');
const app=express();
const path=require('path');
const methodOverride = require('method-override');

const session = require('express-session');
//apartir de aca comienza el sprint3 con el metodo set para ejs y las rutas
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "./views")); // al crear la carpeta src y agregarle views, o crear varias carpetas dentro de views, es neceserio agregar este codigo

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(session({ secret: 'shhhh', resave: false, saveUninitialized: false,}))




//===========================================================================
app.use(express.static(path.join(__dirname,'./public'))); //=======>al crear la carpeta src se debe agregar un punto "." mas a la ruta public 

//==========================================================================

app.use(methodOverride('_method'));
 


app.use('/', require('./routes/raiz.routes'));




app.use((req,res,next)=>{
res.status(404).render('not-found')})

module.exports=app;