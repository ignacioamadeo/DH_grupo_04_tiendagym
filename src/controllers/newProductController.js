
const fs=require('fs');
const data=require('../databases/baseProductos.json');
const path=require('path');


//REGISTRO DE NUEVO PRODUCTO:

//Renderizo el ejs correspondiente:

let productNewController = {

    productNew: (req,res)=>{
        res.render('products/newProduct') //al crear carpetas en views y agregarle archivos, la ruta en el controlador debera ser nombrada con el nombre de la carpeta a la que pertenece
    },
    create:(req,res,next)=>{
        const archivo = req.file;
       let producto={
        prodID: req.body.prodID,
        prodFotos:`../img/${archivo.filename}`,
        prodPrecio:req.body.prodPrecio,
        prodCantidadCuotas: req.body.prodCantidadCuotas,
        prodPrecioCuotas:req.body.prodPrecioCuotas,
        prodNombre:req.body.prodNombre,
        prodDescripcion: req.body.prodDescripcion,
        prodDescrip1:req.body.prodDescrip1,
        prodDescrip2:req.body.prodDescrip2,
        prodDescrip3:req.body.prodDescrip3,
        prodDescrip4:req.body.prodDescrip4,
        prodCategoria: req.body.prodCategoria,
        prodDescuento: req.body.prodDescuento,
        prodCantidad: req.body.prodCantidad,
        envioGratis: req.body.envioGratis
       } 

       data.push(producto);
       fs.writeFileSync(path.join(__dirname,'../databases/baseProductos.json'), JSON.stringify(data, null, 4), {
        encoding: "utf8",
      });

        res.send(producto)
    }
    
    }
    
/*Recordar que al crear carpetas en views y agregarle archivos, 
la ruta en el controlador debera ser nombrada con el nombre 
de la carpeta a la que pertenece*/

//Exporto todo con este nombre:
module.exports = productNewController;