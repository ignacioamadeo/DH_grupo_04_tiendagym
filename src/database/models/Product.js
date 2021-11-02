module.exports = (sequelize, dataTypes)=>{
    let alias = 'Products';
    let cols ={
        prodID:{

        },
        

    };
    let config = {
        tableName:'products',
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config);
    return Product;
}