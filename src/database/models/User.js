module.exports = (sequelize, dataTypes)=>{
    let alias = 'Users';
    let cols = {
        id:{

        },
        firstName:{

        },
        lastName:{

        },
        email:{

        },
        username:{

        },
        password:{

        },
        image:{

        },
        userType:{
            
        }

    };
    let config ={
        tableName: 'users',
        timestamps: false
    }

    const User = sequelize.define(alias, cols, config);
    return User;   
}