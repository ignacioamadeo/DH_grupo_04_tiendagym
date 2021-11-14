module.exports = (sequelize, DataTypes) => {

    //1º Defino alias con el que voy a llamar a la tabla en el CRUD y relaciones:
    let alias = 'Products';

    //2º Replico las columnas de la BBDD y sus tipos de datos:
    let cols = {
        prodID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        prodImg: {
            type: DataTypes.STRING(200)
        },
        prodPrecio: {
            type: DataTypes.INTEGER
        },
        prodCantidadCuotas: {
            type: DataTypes.INTEGER
        },
        prodNombre: {
            type: DataTypes.STRING(100)
        },
        envioGratis: {
            type: DataTypes.INTEGER
        },
        prodCategoria: {
            type: DataTypes.STRING(100)
        },
        prodCantidad: {
            type: DataTypes.INTEGER
        },
        prodDescrip1: {
            type: DataTypes.STRING(200)
        },
        prodDescrip: {
            type: DataTypes.TEXT
        },
        prodDescrip2: {
            type: DataTypes.STRING(200)
        },
        prodDescrip3: {
            type: DataTypes.STRING(200)
        },
        prodDescrip4: {
            type: DataTypes.STRING(200)
        },
        prodDesc: {
            type: DataTypes.INTEGER
        },
    };

    //3º Replico el nombre y otras configuraciones de la tabla original:
    let config = {
        tableName: 'productos',
        timestamps: false
    }

    //º4 Cierro todo definiendo el nombre de la variable que contiene todos estos datos:
    const Product = sequelize.define(alias, cols, config);

    //5º Asocio tablas:
    Product.associate = function (models) {
        Product.belongsToMany(models.Product, { //Relación muchos a muchos con tabla CarritoPRoducto como Pivot
            as: 'producto',
            through: 'CarritoProducto',
            foreignKey: 'prodID',
            otherKey: 'carritoID',
            timestamps: true
        })
    }

    //6º Devuelvo la variable:
    return Product;
}