// const data=require('../db/baseProductos.json')
const db = require('../database/models');
const OP = db.Sequelize.Op
//HOME:

//Renderizo el ejs correspondiente:

let homeController = {

    home: (req, res, next) => {
        res.render('users/home')
    },

    search: (req, res, next) => {
        let busqueda = req.query.search
        // let productsResults = [];

        db.Products.findAll({
            where:{
                prodNombre: {[OP.like]:`%${busqueda}%`}
            }
        }
        ).then(resultados =>{
            
            res.render('products/search', { productInfo: resultados })
        })
        .catch(error => res.send(error))
        // for (let i = 0; i < data.length; i++) {
        //     let products = data[i].prodNombre.toLowerCase()
        //     if (products.includes(busqueda)) {
        //         productsResults.push(data[i])
        //     }
        // }
    },

    construction: (req, res) => {
        res.render('pagConstruc')
    }
}

/*Recordar que al crear carpetas en views y agregarle archivos, 
la ruta en el controlador debera ser nombrada con el nombre 
de la carpeta a la que pertenece*/

//Exporto todo con este nombre:

module.exports=homeController;

