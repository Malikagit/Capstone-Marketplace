const { User } = require('../models');

exports.login = async(req, res) => {
    try {
        const { email, password } = req.body;
        let user = await User.findOne({ where: { email, password }})
        if(user) {
            req.login(user);
            res.json({ message: "Successfully connected" });
        } else {
            res.json({ message: "Invalid email or password" });
        }
    } catch(e) {
        console.log(e);
    }
    
}

exports.signup = async(req, res) => {
    const body = req.body;
    try {
        const user = await createUser(body);
        req.login(user);
        res.json({ message: "Successfully created" })
    } catch(e) {
        console.log(e);
    }
}

exports.logout = (req, res) => {
    req.logout();
    res.json({ message: "Successfully disconnected" })
}