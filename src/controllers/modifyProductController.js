let data=require('../db/baseProductos.json')
const fs=require('fs');
const path=require('path');


//MODIFICAR UN PRODUCTO EXISTENTE:

//Renderizo el ejs correspondiente:

let productModifyController = {

    productModify: (req,res)=>{
        let id=req.params.id
      let  products = data.find(product => product.prodID  == id)
        res.render('products/modifyProduct',{products:products})
    },
    edit:(req,res)=>{
      if(req.file){
       let id=req.params.id 
       let product=data.findIndex(item=> item.prodID == id)
       const archivo = req.file;

       data[product]={
        prodID: req.body.prodID,
        prodFotos:`../img/${archivo.filename}`,
        prodPrecio: "$ " + req.body.prodPrecio,
        prodCantidadCuotas: req.body.prodCantidadCuotas,
        prodPrecioCuotas: "$ " + req.body.prodPrecioCuotas,
        prodNombre:req.body.prodNombre,
        prodDescripcion: req.body.prodDescripcion,
        prodDescrip1:req.body.prodDescrip1,
        prodDescrip2:req.body.prodDescrip2,
        prodDescrip3:req.body.prodDescrip3,
        prodDescrip4:req.body.prodDescrip4,
        prodCategoria: req.body.prodCategoria,
        prodDescuento: req.body.prodDescuento,
        prodCantidad: req.body.prodCantidad,
        envioGratis: req.body.envioGratis,
       } 
       
       fs.writeFileSync(path.join(__dirname,'../databases/baseProductos.json'), JSON.stringify(data, null, 4), {
        encoding: "utf8",
      });

        res.render('products/allProducts',{productInfo:data})
    }
    else{
      let id=req.params.id
      res.redirect(`../${id}`)
  } 
    },


    destroy:(req,res)=>{
        let id=req.params.id;
         data=data.filter(item=>item.prodID != id)
        fs.writeFileSync(
			path.join(__dirname, '../databases/baseProductos.json'),
			JSON.stringify(data, null, 4),
			{
			  encoding: "utf8",
			}
            );
            res.send('La solicitud fue exitiosa')

    }

    }
    
/*Recordar que al crear carpetas en views y agregarle archivos, 
la ruta en el controlador debera ser nombrada con el nombre 
de la carpeta a la que pertenece*/

//Exporto todo con este nombre:

module.exports=productModifyController;