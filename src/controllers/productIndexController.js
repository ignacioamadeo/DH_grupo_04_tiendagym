//ÍNDICE DE TODOS LOS PRODUCTOS:

//Llamo a la base de datos (en este caso objeto json) y la asigno a la variable db:

const db=require('../databases/baseProductos.json');

//Renderizo el ejs correspondiente:

let productIndexController = {
    productIndex: (req, res, next)=>{
       let product=db.filter(item => item.prodCategoria == "#Maq"); 
        res.render('products/productIndex', {productInfo:product }) 
    },
    productYoga: (req, res, next)=>{
        let product=db.filter(item => item.prodCategoria == "#funcPilYog"); 
         res.render('products/productIndex', {productInfo:product }) 
     },
     productBarras: (req, res, next)=>{
        let product=db.filter(item => item.prodCategoria == "#PesDisBar"); 
         res.render('products/productIndex', {productInfo:product }) 
     },
     productIndumentaria: (req, res, next)=>{
        let product=db.filter(item => item.prodCategoria == "#Ind"); 
         res.render('products/productIndex', {productInfo:product }) 
     }
    

}

/*Recordar que al crear carpetas en views y agregarle archivos, 
la ruta en el controlador debera ser nombrada con el nombre 
de la carpeta a la que pertenece*/

//Exporto todo con este nombre:

module.exports=productIndexController;