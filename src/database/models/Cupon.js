/* --- 
TABLA CUPONES DE DESCUENTO - CONEXIÓN CON BBDD EN SQL A TRAVÉS DE SEQUELIZE: 
--- */

module.exports = (sequelize, DataTypes) => {
  //1º Defino alias con el que voy a llamar a la tabla en el CRUD y relaciones:
  alias = "Cupones";

  //2º Replico las columnas de la BBDD y sus tipos de datos:
  cols = {
    cuponID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cuponPerc: {
      type: DataTypes.INTEGER,
    },
    cuponUsado: {
      type: DataTypes.INTEGER,
    },
    cuponPass: {
      type: DataTypes.STRING(20),
    },
  };

  //3º Replico el nombre y otras configuraciones de la tabla original:
  config = {
    tableName: "cupones",
    timestamps: false,
  };

  //4º Cierro todo definiendo el nombre de la variable que contiene todos estos datos:
  const Cupon = sequelize.define(alias, cols, config);

  //5º Asocio la relación 1 a 1 con "Carrito" con el ID cuponID como FK:
  Cupon.associate = function (models) {
    Cupon.belongsTo(models.Carrito, {
      as: "carrito",
      foreignKey: "carritoID",
    });

    /*Alternativa B, hacer ambas relaciones en el mismo archivo:
        ,
        Carrito.hasOne(models.Cupon, { //Relación 1 a 1 con "Cupon" con el ID cuponID como FK.
            as: 'cuponID',
            foreignKey: 'cuponID'
        })
        */
  };

  //6º Devuelvo la variable:
  return Cupon;
};


//Flujo entero: index.js > app.js > raiz.routes(desacople) > ruta > controllers > 👉🏼 models > SQL