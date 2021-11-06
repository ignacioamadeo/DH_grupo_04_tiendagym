module.exports = (sequelize, DataTypes) =>{
    alias = 'Cupones';
    cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        cuponPerc:{
            type:DataTypes.STRING(10) 
        },
        cuponUsado:{
            type:DataTypes.BOOLEAN 
        },
        cuponPass:{
            type:DataTypes.STRING(20)
        },
    };
    config = {
        tableName:'cupones',
        timestamps: false
    }
    const Cupon = sequelize.define(alias, cols, config);
    return Cupon;
}