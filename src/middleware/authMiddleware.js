function  authMiddleware(req, res, next) {
	if (!req.session.userLogged && !req.session.userAdmin) {
		return res.redirect('/login');
	}
	
	next();
}

module.exports = authMiddleware;