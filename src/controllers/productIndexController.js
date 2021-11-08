//ÍNDICE DE TODOS LOS PRODUCTOS:

//Llamo a la base de datos (en este caso objeto json) y la asigno a la variable db:

// const db=require('../db/baseProductos.json');

const db = require('../database/models');


//Renderizo el ejs correspondiente:

let productIndexController = {
    productIndex: (req, res, next)=>{
    //    let product=db.filter(item => item.prodCategoria == "#Maq"); 
    db.Products.findAll({
        where:{
            prodCategoria: "#Maq"
        }
    }).then(product =>{
        res.render('products/productIndex', {productInfo:product }) 

    }).catch(error => res.send(error));
    },
    productYoga: (req, res, next)=>{
        // let product=db.filter(item => item.prodCategoria == "#funcPilYog"); 
        db.Products.findAll({
            where:{
                prodCategoria: "#funcPilYog"
            }
        }).then(product =>{
            res.render('products/productIndex', {productInfo:product }) 

        }).catch(error => res.send(error));
     },
     productBarras: (req, res, next)=>{
        // let product=db.filter(item => item.prodCategoria == "#PesDisBar"); 
        db.Products.findAll({
            where:{
                prodCategoria: "#PesDisBar"
            }
        }).then(product =>{
            res.render('products/productIndex', {productInfo:product }) 

        }).catch(error => res.send(error));
     },
     productIndumentaria: (req, res, next)=>{
        // let product=db.filter(item => item.prodCategoria == "#Ind"); 
        db.Products.findAll({
            where:{
                prodCategoria: "#Ind"
            }
        }).then(product =>{
            res.render('products/productIndex', {productInfo:product }) 

        }).catch(error=> res.send(error))
     }
    

}

/*Recordar que al crear carpetas en views y agregarle archivos, 
la ruta en el controlador debera ser nombrada con el nombre 
de la carpeta a la que pertenece*/

//Exporto todo con este nombre:

module.exports=productIndexController;