const express=require('express');
const app=express();
const path=require('path');
app.set('view engine', 'ejs');
let rutasIndex= require('./routes/index.js');

app.use(express.static(path.join(__dirname,'./public')));

//==========================================================================

 app.use('/', rutasIndex); //====> dentro del router hay que usar el metodo render, sino no rompe todo.

//   app.get('/', (req, res)=>{
//       res.sendFile(path.join(__dirname,'./views/index.ejs'))
//   });


app.get('/productCart', (req,res)=>{
    res.sendFile(path.join(__dirname,'./views/productCart.html'))
});

app.get('/productDetail',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/productDetail.html'))
})

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/login.html'))
})

app.get('/productIndex',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/productIndex.html'))
})

app.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/register.html'))
})


const puerto = process.env.PORT || 3000

app.listen(puerto,()=>
    console.log(`el puerto ${puerto} esta activo`)
)
