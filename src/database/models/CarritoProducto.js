module.exports = (sequelize,DataTypes)=>{
    alias = 'CarritosProductos';
    cols = {
        carritoProductoID:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        carritoID:{
            type: DataTypes.INTEGER
        },
        prodID:{
            type: DataTypes.INTEGER
        },
        productQ:{
            type:DataTypes.INTEGER
        },
        createdAt:{
            type:DataTypes.DATE 
        },
        updatedAt:{
            type:DataTypes.DATE
        },
    };
    config = {
        tableName:'carritosProductos',
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'createdAt',
        deletedAt: false
    };
    const CarritoProducto = sequelize.define(alias,cols,config);
    return CarritoProducto;
}