const requireAuth = (req, res, next) => {
    if(req.isAuthenticatedUser()){
        next();
    } else {
        res.json({ message: "Forbidden User" });
    }
}

const requireAdmin = (req, res, next) => {
    if(req.isAuthenticatedAdmin()){
        next();
    } else {
        res.json({ message: "Forbidden Admin" });
    }
}


module.exports = { requireAuth, requireAdmin };