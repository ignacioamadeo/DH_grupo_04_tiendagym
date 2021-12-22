/* --- 
TABLA INTERMEDIA CARRITO/PRODUCTOS - CONEXIÓN CON BBDD EN SQL A TRAVÉS DE SEQUELIZE: 
--- */

module.exports = (sequelize, DataTypes) => {
  //1º Defino alias con el que voy a llamar a la tabla en el CRUD y relaciones:
  alias = "CarritosProductos";

  //2º Replico las columnas de la BBDD y sus tipos de datos:
  cols = {
    carritoProductoID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    carritoID: {
      type: DataTypes.INTEGER,
      references: { model: "Carrito", key: "carritoID" }, //Config variables FKs de tabla pivot
    },
    prodID: {
      type: DataTypes.INTEGER,
      references: { model: "Product", key: "prodID" }, //Config variables FKs de tabla pivot
    },
    productQ: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  };

  //3º Replico el nombre y otras configuraciones de la tabla original:
  config = {
    tableName: "carritosProductos",
    timestamps: true,
    createdAt: "createdAt",
    updatedAt: "createdAt",
    deletedAt: false,
  };

  //º4 Cierro todo definiendo el nombre de la variable que contiene todos estos datos:
  const CarritoProducto = sequelize.define(alias, cols, config);

  //5º Asocio tablas:

  //6º Devuelvo la variable:
  return CarritoProducto;
};


//Flujo entero: index.js > app.js > raiz.routes(desacople) > ruta > controllers > 👉🏼 models > SQL