exports.getUserProfile = (req, res) => {
    try {
        if(req.user) {
            return res.json({ user: req.user });
        } else {
            return res.json({ message: "Not Found"});
        }
    } catch(e) {
        console.log(e);
    }
}

exports.getAdmin = (req, res) => {
    try {
        if(req.admin) {
            return res.json({ admin: req.admin });
        } else {
            return res.json({ message: "Not Found"});
        }
    } catch(e) {
        console.log(e);
    }
}