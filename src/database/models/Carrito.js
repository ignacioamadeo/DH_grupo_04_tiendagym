/* --- 
MODELO CARRITO - CONEXIÓN CON BBDD EN SQL A TRAVÉS DE SEQUELIZE: 
--- */

//Acá se estila poner todo en el module.exports, pero podría definirse aparte y luego exportar todo.

module.exports = (sequelize, DataTypes) => {
  //1º Defino alias con el que voy a llamar a la tabla en el CRUD y relaciones:
  alias = "Carrito";

  //2º Replico las columnas de la BBDD y sus tipos de datos:
  cols = {
    carritoID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userID: {
      type: DataTypes.INTEGER,
    },
    cuponID: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    tipoPago: {
      type: DataTypes.STRING(20),
    },
    compraOK: {
      type: DataTypes.INTEGER,
    },
    pagoOK: {
      type: DataTypes.INTEGER,
    },
    envioOK: {
      type: DataTypes.INTEGER,
    },
    direccionEnvio: {
      type: DataTypes.STRING(100),
    },
    telefonoEnvio: {
      type: DataTypes.STRING(20),
    },
    comentariosEnvio: {
      type: DataTypes.TEXT,
    },
  };

  //3º Replico el nombre y otras configuraciones de la tabla original:
  config = {
    tableName: "carrito",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: false,
  };

  //º4 Cierro todo definiendo el nombre de la variable que contiene todos estos datos:
  const Carrito = sequelize.define(alias, cols, config);

  //5º Asocio tablas:
  Carrito.associate = function (models) {
    Carrito.belongsTo(models.Users, {
      //Relación 1 a 1 con "User" con el ID userID como FK.
      as: "user",
      foreignKey: "userID",
    }),
      Carrito.belongsTo(models.Cupones, {
        //Relación 1 a 1 con "Cupon" con el ID cuponID como FK.
        as: "cupon",
        foreignKey: "cuponID",
      }),
      Carrito.belongsToMany(models.Products, {
        //Relación muchos a muchos con tabla CarritoPRoducto como Pivot
        as: "carrito",
        through: "CarritoProducto",
        foreignKey: "carritoID",
        otherKey: "prodID",
        timestamps: true,
      });
  };
  //6º Devuelvo la variable:
  return Carrito;
};


//Flujo entero: index.js > app.js > raiz.routes(desacople) > ruta > controllers > 👉🏼 models > SQL