module.exports = (sequelize, DataTypes) => {

    //1º Defino alias con el que voy a llamar a la tabla en el CRUD y relaciones:
    let alias = 'Users';

    //2º Replico las columnas de la BBDD y sus tipos de datos:    
    let cols = {
        userID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: DataTypes.STRING(20)
        },
        lastName: {
            type: DataTypes.STRING(20)
        },
        email: {
            type: DataTypes.STRING(40)
        },
        username: {
            type: DataTypes.STRING(20)
        },
        password: {
            type: DataTypes.STRING(20)
        },
        image: {
            type: DataTypes.STRING(100)
        },
        userType: {
            type: DataTypes.INTEGER
        }

    };

    //3º Replico el nombre y otras configuraciones de la tabla original:
    let config = {
        tableName: 'users',
        timestamps: false
    }

    //4º Cierro todo definiendo el nombre de la variable que contiene todos estos datos:
    const User = sequelize.define(alias, cols, config);

    //5º Asocio la relación 1 a 1 con "Carrito" con el ID userID como FK:
    User.associate = function (models) {
        User.hasOne(models.Carrito, {
            as: 'carritoID',
            foreignKey: 'carritoID'
        })

        /* Alternativa B, hacer ambas relaciones en el mismo archivo:
        ,   
        Carrito.belongsTo(models.User, { //Relación 1 a 1 con "User" con el ID userID como FK.
            as: 'userID',
            foreignKey: 'userID'
        })
        */
    }

    //6º Devuelvo la variable:
    return User;
}