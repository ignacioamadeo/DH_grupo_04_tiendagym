
const { Users } = require("../../database/models");

const controllers ={
list: async (req,res) =>{
try {
    let listUsers =[]
    const users = await Users.findAll()
    users.forEach(item => {
        let list = {
            id: item.userID,
            name:item.firstName,
            apellido:item.lastName,
            email:item.email,
            username:item.username
        }   
       return listUsers.push(list)
    });

    
    res.status(200).json({
        count: users.length,
        data :  listUsers ,
        error:null,
        detail: '/api/users',
        succes:true
    })
} catch (error) {
    res.status(500).json({count: null,data: null, error: error, detail: null ,succes: false})
}
},
user: async (req,res)=>{
    try {
       const user = await Users.findByPk(req.params.id)
       
       res.status(200).json({
        data : {
            id: user.userID,
            name: user.firstName,
            lastName:user.lastName,
            email: user.email,
            username: user.username,
            image:{
                url: user.image
            }
        } ,
        error:null,
        detail: `/api/users/${user.userID}`,
        succes:true
       })
    } catch (error) {
        res.status(500).json({data: null, error: error, detail: null ,succes: false})
    }
}
}

module.exports = controllers;