const db = require("../database/models");

const Users = {
  create: function (user) {
    const response = db.Users.create({
      ...user,
    });
    return response;
  },
  update: function (user, idUser) {
    const response = db.Users.update(
      {
        ...user,
      },
      {
        where: {
          id: idUser,
        },
      }
    );
    return response;
  },
  delete: function (idUser) {
    const response = db.Users.destroy({
      where: {
        id: idUser,
      },
    });
    return response;
  },

  findByField: function (text) {
    let userFound = db.Users.findOne({
      where:{
        email : text
      }
    })
    .then( function(respuesta){
     console.log(respuesta)
    }).catch(error => console.log(error))
    return userFound
  }
};

module.exports = Users;
