 function guestMiddleware(req, res, next) {
	if (req.session.userLogged || req.session.userAdmin ) {
	return	 res.redirect('/login/profile');
	}
	
	next();
}

module.exports = guestMiddleware;