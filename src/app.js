const express=require('express');
const app=express();
const path=require('path');
//apartir de aca comienza el sprint3 con el metodo set para ejs y las rutas
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "./views")); // al crear la carpeta src y agregarle views, o crear varias carpetas dentro de views, es neceserio agregar este codigo

app.use(express.urlencoded({extended:false}));
app.use(express.json());

//let rutasIndex= require('./routes/index.js');
//let rutasCarrito=require('./routes/productCart.js');
//let rutasProductDetail=require('./routes/productDetail.js');
//let rutasProductIndex=require('./routes/productindex.js');
//let rutasLogin=require('./routes/login.js');
//let rutasRegister=require('./routes/register.js');
//let rutasNewProduct=require('./routes/newProduct.js');
//let rutasModifyProduct=require('./routes/modifyProduct.js');
//===========================================================================
app.use(express.static(path.join(__dirname,'./public'))); //=======>al crear la carpeta src se debe agregar un punto "." mas a la ruta public 

//==========================================================================

 //app.use('/', rutasIndex); //====> dentro del router hay que usar el metodo render, sino no rompe todo.

//   app.get('/', (req, res)=>{
//       res.sendFile(path.join(__dirname,'./views/index.ejs'))
//   });


//app.use('/productCart',rutasCarrito);


// app.get('/productCart', (req,res)=>{
//     res.sendFile(path.join(__dirname,'./views/productCart.html'))
// });



//app.use('/productDetail', rutasProductDetail);

// app.get('/productDetail',(req,res)=>{
//     res.sendFile(path.join(__dirname,'./views/productDetail.html'))
// })


//app.use('/login', rutasLogin);

// app.get('/login',(req,res)=>{
//     res.sendFile(path.join(__dirname,'./views/login.html'))
// })


//app.use('/productIndex', rutasProductIndex);

// app.get('/productIndex',(req,res)=>{
//     res.sendFile(path.join(__dirname,'./views/productIndex.html'))
// })



//app.use('/register', rutasRegister);

// app.get('/register',(req,res)=>{
//     res.sendFile(path.join(__dirname,'./views/register.html'))
// })


//app.use('/newProduct', rutasNewProduct);

//Es nuevo


//app.use('/modifyProduct', rutasModifyProduct);

//Es nuevo





app.use('/', require('./routes/raiz.routes'));




module.exports=app;