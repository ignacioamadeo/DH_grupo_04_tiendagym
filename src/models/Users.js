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
};

module.exports = Users;
