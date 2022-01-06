const { User } = require("../models");
async function userLoggedMiddleware(req, res, next) {
  res.locals.isLogged = false;
  let emailInCookie = req.cookies.recordame;
  
  if (emailInCookie) {
    let admi = await User.admi()
    let userFromCookie = await User.findByField(emailInCookie);
    if (userFromCookie &&   userFromCookie.email != admi.email) {
      req.session.userLogged = userFromCookie;
    }
    else{
      req.session.userAdmin = admi ;
    }
  }

  if (req.session.userLogged) {
    res.locals.isLogged = true;
    res.locals.userLogged = req.session.userLogged;
  }

  next();
}

module.exports = userLoggedMiddleware;
