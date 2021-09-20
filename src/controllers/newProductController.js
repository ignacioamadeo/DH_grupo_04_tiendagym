//REGISTRO DE NUEVO PRODUCTO:

//Renderizo el ejs correspondiente:

let productNewController = {

    productNew: (req,res)=>{
        res.render('products/newProduct') //al crear carpetas en views y agregarle archivos, la ruta en el controlador debera ser nombrada con el nombre de la carpeta a la que pertenece
    },
    create:(req,res,next)=>{
       let producto={
        prodID: req.body.prodID,
        prodFotos:req.body.prodFotos,
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
        res.send(req.body)
    }
    
    }
    
/*Recordar que al crear carpetas en views y agregarle archivos, 
la ruta en el controlador debera ser nombrada con el nombre 
de la carpeta a la que pertenece*/

//Exporto todo con este nombre:
module.exports = productNewController;