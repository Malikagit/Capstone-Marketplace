const { User } = require('../models');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');


const secret = process.env.SECRET_KEY;

const createToken =  (user) => {
    const token = jwt.sign({ sub: user.id }, secret, { expiresIn: '1h' });
    return token;
}

module.exports = {
    
    addTokenFunc: (req, res, next) => {
        req.isAuthenticatedUser = () => !!req.user;
        req.isAuthenticatedAdmin = () => !!req.admin;
        req.logout = () => res.clearCookie('jwt');
        req.login = (user) => {
            const token = createToken(user);
            // console.log(token)
            res.cookie('jwt', token);
        }
        next();
    },

    getUserFromToken: async(req, res, next) => {
        const token = req.cookies.jwt;
        if(token) {
            try {
                const decodedToken = jwt.verify(token, secret);
                const user = await User.findOne({ where: { id: decodedToken.sub }});
                if(user) {
                    if(user.isAdmin === true) {
                        req.admin = user;
                    } else {
                        req.user = user;
                    }
                    next();
                } else {
                    res.clearCookie('jwt');
                    res.redirect('/');
                }
            } catch(e) {
                res.clearCookie('jwt');
                res.redirect('/');
            }
        } else {
            next();
        }
    }
    
}
