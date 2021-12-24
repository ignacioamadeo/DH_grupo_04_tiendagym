function  admiMiddleware(req, res, next) {
	if (!req.session.userAdmin) {
		 res.redirect('/');
	}
	next();
}

module.exports = admiMiddleware;