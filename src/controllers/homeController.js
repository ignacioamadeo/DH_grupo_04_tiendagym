const data=require('../databases/baseProductos.json')

//HOME:

//Renderizo el ejs correspondiente:

let homeController = {
    home: (req, res, next)=>{
        res.render('users/home') 
    },
    search:(req,res,next)=>{
        let busqueda= req.query.search
        let productsResults=[];
        
        
       for (let i=0; i < data.length; i++) {
        let products=data[i].prodNombre.toLowerCase()
           if(products.includes(busqueda)){
               productsResults.push(data[i])
           }
       }
      
        res.render('products/search', {productInfo:productsResults})
    }

}

/*Recordar que al crear carpetas en views y agregarle archivos, 
la ruta en el controlador debera ser nombrada con el nombre 
de la carpeta a la que pertenece*/

//Exporto todo con este nombre:

module.exports=homeController;

