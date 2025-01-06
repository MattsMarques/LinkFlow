function auth(req, res, next) {
    if (req.session && req.session.usuario) {
        next();
    } else {
        req.session.returnTo = req.originalUrl; // Salva a URL original
        res.redirect('/usuarios/login');
    }
}

module.exports = auth;
