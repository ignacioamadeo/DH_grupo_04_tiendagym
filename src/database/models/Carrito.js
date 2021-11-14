//Acá se estila poner todo en el module.exports, pero podría definirse aparte y luego exportar todo.
module.exports = (sequelize, DataTypes) => {

    //Defino alias con el que voy a llamar a la tabla en el CRUD y relaciones:
    alias = 'Carrito';

    //Replico las columnas de la BBDD y sus tipos de datos:
    cols = {
        carritoID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userID: {
            type: DataTypes.INTEGER
        },
        cuponID: {
            type: DataTypes.INTEGER
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        },
        tipoPago: {
            type: DataTypes.STRING(20)
        },
        compraOK: {
            type: DataTypes.INTEGER
        },
        pagoOK: {
            type: DataTypes.INTEGER
        },
        envioOK: {
            type: DataTypes.INTEGER
        },
        direccionEnvio: {
            type: DataTypes.STRING(100)
        },
        telefonoEnvio: {
            type: DataTypes.STRING(20)
        },
        comentariosEnvio: {
            type: DataTypes.TEXT
        }
    };

    //Replico el nombre y otras configuraciones de la tabla original:
    config = {
        tableName: 'carrito',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    
    //Cierro todo definiendo el nombre de la variable que contiene todos estos datos:
    const Carrito = sequelize.define(alias, cols, config);

    //Asocio la relación 1 a 1 con "Carrito" con el ID userID como FK:
    Carrito.associate = function (models) {
        Carrito.belongsTo(models.User, {
            as: 'userID',
            foreignKey: 'userID'
        })
    }

    //Devuelvo la variable:
    return Carrito;
}