module.exports = (sequelize, DataTypes)=>{
    let alias = 'Users';
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        firstName:{
            type: DataTypes.STRING  
        },
        lastName:{
            type: DataTypes.STRING  
        },
        email:{
            type: DataTypes.STRING
        },
        username:{
            type: DataTypes.STRING
        },
        password:{
            type: DataTypes.STRING
        },
        image:{
            type: DataTypes.STRING
        },
        userType:{
            type:DataTypes.BOOLEAN 
        }

    };
    let config ={
        tableName: 'users',
        timestamps: false
    }

    const User = sequelize.define(alias, cols, config);
    return User;   
}