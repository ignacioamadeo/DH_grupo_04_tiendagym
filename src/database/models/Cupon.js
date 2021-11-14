module.exports = (sequelize, DataTypes) =>{
    alias = 'Cupones';
    cols = {
        cuponID:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        cuponPerc:{
            type:DataTypes.INTEGER
        },
        cuponUsado:{
            type:DataTypes.INTEGER
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