/* --- 
TABLA CATEGORÍAS - CONEXIÓN CON BBDD EN SQL A TRAVÉS DE SEQUELIZE: 
--- */

module.exports = (sequelize, DataTypes) => {

  //1º Defino alias con el que voy a llamar a la tabla en el CRUD y relaciones:
  let alias = "Categories";

  //2º Replico las columnas de la BBDD y sus tipos de datos:
  let cols = {
    code: {
      type: DataTypes.STRING(100),
      primaryKey: true,
    },
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
    },
  };

  //3º Replico el nombre y otras configuraciones de la tabla original:
  let config = {
    tableName: "categorias",
    timestamps: false,
  };

  //º4 Cierro todo definiendo el nombre de la variable que contiene todos estos datos:
  const Category = sequelize.define(alias, cols, config);

  //5º Asocio tablas:
  Category.associate = function (models) {
    Category.hasMany(models.Products, {
      as: "producto",
      foreignKey: "prodCategoria",
    });
  }
  //6º Devuelvo la variable:
  return Category;
};


//Flujo entero: index.js > app.js > raiz.routes(desacople) > ruta > controllers > 👉🏼 models > SQL