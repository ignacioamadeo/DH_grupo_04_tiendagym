function guestMiddleware(req, res, next) {
	if (req.session.userLogged) {
		 res.redirect('/login/profile');
	}
	next();
}

module.exports = guestMiddleware;