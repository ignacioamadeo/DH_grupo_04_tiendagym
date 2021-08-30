const express=require('express');
const app=express();
const path=require('path');

app.use(express.static(path.join(__dirname,'./public')));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,'./views/index.html'))
});
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
