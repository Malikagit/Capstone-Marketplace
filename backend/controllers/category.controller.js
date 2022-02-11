const Product = require('../models/category');

//lister tous les articles
exports.getAllItems = async (req, res) => {
    await Category.findAll()
        .then(articls => { res.render('home', { category }) })
        .catch(msg => {
            res.render('home', {
                messageClass: 'alert-danger',
                message: msg
            })
        })
}
//afficer detail product
exports.getItemByID = async (req, res) => {

    const { id } = req.params;

    await Product.findOne({ where: { id }, raw: true })
        .then(prodcutData => {
            res.render('product', { prodcutData });
            res.redirect("/productDetails")
        })
        .catch(err => { res.status(404).send(err) })
}

//add new article
exports.createItem = async (req, res) => {
    await Product.create(req.body)
        .then(_ => { res.redirect("/procuctDetails") })
        .catch(err => { console.error(err) })
}
//update prodcut
exports.updateItem = (req, res) => {
    Product.update({ where: { id: req.params.id } }, {

    })
}