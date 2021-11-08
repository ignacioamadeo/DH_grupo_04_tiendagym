module.exports = (sequelize,DataTypes)=>{
    alias = 'CarritosProductos';
    cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        carritoID:{
            type: DataTypes.INTEGER
        },
        productoID:{
            type: DataTypes.INTEGER
        },
        productQ:{
            type:DataTypes.STRING(10) 
        },
        createAt:{
            type:DataTypes.DATE 
        },
        updateAt:{
            type:DataTypes.DATE
        },
    };
    config = {
        tableName:'carritosProductos',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    };
    const CarritoProducto = sequelize.define(alias,cols,config);
    return CarritoProducto;
}