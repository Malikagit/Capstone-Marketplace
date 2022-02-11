const { where } = require("sequelize/types")

//test avec user
exports.getUser = async (req, res) => {
    await User.findOne({ where: { id: req.params.id } })
        .then(user => { return res.json(user) })
        .catch(err => { res.status(404).send(err) })
}
exports.getAllUsers = async (req, res) => {
    await User.finAll()
        .then(users => { return res.json(users) })
        .catch(err => { res.status(404).send(err) })
}

//chercher un user by fullname
exports.getUserMail = async (req, res) => {
    await User.findAll({ where: { email: req.params.email } })
}

// //create Item
// exports.createUser=
// //update product 
// exports.updateUser()
