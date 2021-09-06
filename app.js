const express=require('express');
const app=express();
const path=require('path');
//apartir de aca comienza el sprint3 con el metodo set para ejs y las rutas
app.set('view engine', 'ejs');
let rutasIndex= require('./routes/index.js');
let rutasCarrito=require('./routes/productCart.js');
let rutasProductDetail=require('./routes/productDetail.js');
let rutasProductIndex=require('./routes/productindex.js');
let rutasLogin=require('./routes/login.js');
let rutasRegister=require('./routes/register.js');
//===========================================================================
app.use(express.static(path.join(__dirname,'./public')));

//==========================================================================

 app.use('/', rutasIndex); //====> dentro del router hay que usar el metodo render, sino no rompe todo.

//   app.get('/', (req, res)=>{
//       res.sendFile(path.join(__dirname,'./views/index.ejs'))
//   });


app.use('/productCart',rutasCarrito);


// app.get('/productCart', (req,res)=>{
//     res.sendFile(path.join(__dirname,'./views/productCart.html'))
// });



app.use('/productDetail', rutasProductDetail);

// app.get('/productDetail',(req,res)=>{
//     res.sendFile(path.join(__dirname,'./views/productDetail.html'))
// })


app.use('/login', rutasLogin);

// app.get('/login',(req,res)=>{
//     res.sendFile(path.join(__dirname,'./views/login.html'))
// })


app.use('/productIndex', rutasProductIndex);

// app.get('/productIndex',(req,res)=>{
//     res.sendFile(path.join(__dirname,'./views/productIndex.html'))
// })



app.use('/register', rutasRegister);

// app.get('/register',(req,res)=>{
//     res.sendFile(path.join(__dirname,'./views/register.html'))
// })


const puerto = process.env.PORT || 3000

app.listen(puerto,()=>
    console.log(`el puerto ${puerto} esta activo`)
)
