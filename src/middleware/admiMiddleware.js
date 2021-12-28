function  admiMiddleware(req, res, next) {
	if (!req.session.userAdmin) {
		return res.redirect('/');
	}
	next();
}

module.exports = admiMiddleware;