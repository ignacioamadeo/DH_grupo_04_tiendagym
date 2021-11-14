module.exports = (sequelize, DataTypes)=>{
    let alias = 'Users';
    let cols = {
        userID:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        firstName:{
            type: DataTypes.STRING(20)  
        },
        lastName:{
            type: DataTypes.STRING(20)  
        },
        email:{
            type: DataTypes.STRING(40)
        },
        username:{
            type: DataTypes.STRING(20)
        },
        password:{
            type: DataTypes.STRING(20)
        },
        image:{
            type: DataTypes.STRING(100)
        },
        userType:{
            type:DataTypes.INTEGER 
        }

    };
    let config ={
        tableName: 'users',
        timestamps: false
    }

    const User = sequelize.define(alias, cols, config);
    return User;   
}