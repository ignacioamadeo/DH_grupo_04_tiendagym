module.exports = (sequelize, DataTypes)=>{
    alias ='Carrito';
    cols={
        carritoID:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        userID:{
            type: DataTypes.INTEGER
        },
        cuponID:{
            type: DataTypes.INTEGER
        },
        createdAt:{
            type:DataTypes.DATE 
        },
        updatedAt:{
            type:DataTypes.DATE 
        },
        tipoPago:{
            type:DataTypes.STRING(20) 
        },
        compraOK:{
            type: DataTypes.INTEGER
        },
        pagoOK:{
            type: DataTypes.INTEGER 
        },
        envioOK:{
            type: DataTypes.INTEGER 
        },
        direccionEnvio:{
            type:DataTypes.STRING(100)
        },
        telefonoEnvio:{
            type:DataTypes.STRING(20)
        },
        comentariosEnvio:{
            type:DataTypes.TEXT
        }
        

    };
    config={
        tableName:'carrito',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Carrito = sequelize.define(alias,cols,config);
    return Carrito;
}