module.exports = (sequelize, DataTypes)=>{
    let alias = 'Products';
    let cols ={
        prodID:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        prodImg:{
            type: DataTypes.STRING(200)  
        },
        prodPrecio:{
            type: DataTypes.INTEGER 
        },
        prodCantidadCuotas:{
            type: DataTypes.INTEGER 
        },
        prodNombre:{
            type: DataTypes.STRING(100)  
        },
        envioGratis:{
            type: DataTypes.INTEGER 
        },
        prodCategoria:{
            type: DataTypes.STRING(100)  
        },
        prodCantidad:{
            type: DataTypes.INTEGER
        },
        prodDescrip1:{
            type:DataTypes.STRING(200) 
        },
        prodDescrip:{
            type:DataTypes.TEXT 
        },
        prodDescrip2:{
            type: DataTypes.STRING(200) 
        },
        prodDescrip3:{
            type: DataTypes.STRING(200)
        },
        prodDescrip4:{
            type: DataTypes.STRING(200)
        },
        prodDesc:{
            type: DataTypes.INTEGER
        },
        

    };
    let config = {
        tableName:'productos',
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config);
    return Product;
}