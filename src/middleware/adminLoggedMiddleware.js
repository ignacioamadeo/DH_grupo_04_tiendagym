// const { User } = require("../models");
 function adminLoggedMiddleware(req, res, next) {
  res.locals.Logged = false;
//   let emailInCookie = req.cookies.recordame;

//   if (emailInCookie) {
//     let userFromCookie = await User.findByField(emailInCookie);

//     if (userFromCookie) {
//       req.session.userLogged = userFromCookie;
//     }
//   }

  if (req.session.userAdmin) {
    res.locals.Logged = true;
    res.locals.adminLogged = req.session.userAdmin;
  }

  next();
}

module.exports = adminLoggedMiddleware;