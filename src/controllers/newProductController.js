
// const fs=require('fs');
// const data=require('../db/baseProductos.json');
// const path=require('path');
const {Productos} = require('../models/index');
const db = require('../database/models');


//REGISTRO DE NUEVO PRODUCTO:

//Renderizo el ejs correspondiente:

let productNewController = {

    productNew: (req,res)=>{
        res.render('products/newProduct') //al crear carpetas en views y agregarle archivos, la ruta en el controlador debera ser nombrada con el nombre de la carpeta a la que pertenece
    },
    // create:(req,res,next)=>{
    //     if(req.file){
    //     const archivo = req.file;
    //    let producto={
    //     prodID: req.body.prodID,
    //     prodFotos:`../img/${archivo.filename}`,
    //     prodPrecio: "$ " + req.body.prodPrecio,
    //     prodCantidadCuotas: req.body.prodCantidadCuotas,
    //     prodPrecioCuotas: "$ " + req.body.prodPrecioCuotas,
    //     prodNombre:req.body.prodNombre,
    //     prodDescripcion: req.body.prodDescripcion,
    //     prodDescrip1:req.body.prodDescrip1,
    //     prodDescrip2:req.body.prodDescrip2,
    //     prodDescrip3:req.body.prodDescrip3,
    //     prodDescrip4:req.body.prodDescrip4,
    //     prodCategoria: req.body.prodCategoria,
    //     prodDescuento: req.body.prodDescuento,
    //     prodCantidad: req.body.prodCantidad,
    //     envioGratis: req.body.envioGratis
    //    } 

    //    data.push(producto);
    //    fs.writeFileSync(path.join(__dirname,'../databases/baseProductos.json'), JSON.stringify(data, null, 4), {
    //     encoding: "utf8",
    //   });

    //     res.redirect('./newProduct/allProducts')
    // }
    // else{
    //     res.render('products/newProduct')
    // }
    // },
    all: (req,res)=>{
       db.Products.findAll()
       .then(data =>{
        res.render('products/allProducts', {productInfo:data })
       }).catch(error => console.log(error));
    },



create:(req,res)=>{
       let producto = {
           ...req.body,
           prodImg:`../img/${req.file.filename}`
        }
        Productos.create(producto)
        res.redirect('./newProduct/allProducts')
    }


    
    }
    
/*Recordar que al crear carpetas en views y agregarle archivos, 
la ruta en el controlador debera ser nombrada con el nombre 
de la carpeta a la que pertenece*/

//Exporto todo con este nombre:
module.exports = productNewController;