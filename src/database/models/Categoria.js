module.exports = (sequelize, DataTypes) => {
  let alias = "Categories";

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

  let config = {
    tableName: "categorias",
    timestamps: false,
  };

  const Category = sequelize.define(alias, cols, config);


  Category.associate = function (models) {
    Category.hasMany(models.Products, {
      as: "producto",
      foreignKey: "prodCategoria",
    });
}

  return Category;
};
