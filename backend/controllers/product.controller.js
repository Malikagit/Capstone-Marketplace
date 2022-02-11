const models = require('../models');

const Product = models.Product;
const Category = models.Category;
const CategoryProduct = models.CategoryProduct
const UserProduct = models.UserProduct


//lister tous les articles
exports.getArticles = (req, res) => {
    Product.findAll({ raw: true, limit: 15 })
        .then(articles => { res.send(articles) })
        .catch(err => { res.status(404).send(err) })
}
//afficer detail product 
exports.getArticleById = async (req, res) => {
    const { id } = req.params;

    await Product.findOne({ where: { id }, raw: true })
        .then(prodcutData => {
            console.log(prodcutData);
            res.send(prodcutData);

        })
        .catch(err => { res.status(404).send(err) })
}


//add new article
exports.createArticle = (req, res) => {
    const { idSellere } = req.user
    Product.findOrCreate([{
        name: req.name,
        picturePath: req.body.picturePath,
        description: req.body.description,
        sller: idSellere
    }], { raw: true })
        .then(articleAdd => {
            // CategoryProduct.findOrCreate({productId:articleAdd.id,})
            res.redirect("/procuctDetails");
            console.log(articleAdd);
        })
        .catch(err => { console.error(err) })
}
//update prodcut
exports.updatArticle = (req, res) => {
    Product.update({ where: { id: req.params.id } }, {
        name: req.body.name,
        picturePath: req.body.picturePath,
        description: req.body.description,
        seller: req.user
    })
        .then(_ => {
            Product.findOne({ where: { id: req.params.id } })
                .then(product => { res.send(product) })
                .catch(err => { console.error(err); })

        })
        .catch(err => { console.log(err); })
}
//delete Article
exports.deleteArticle = (req, res) => {
    const elemSuprime = Product.destroy({ where: { id: parseInt(req.params.id) } },
    )
        .then(_ => {
            console.log(elemSuprime);
            res.send(elemSuprime);

        })
        .catch(err => { console.error(err); })
}
//get categories
exports.getCategories = (req, res) => {
    Category.findAll({ limit: 10, raw: true })
        .then(categories => {
            res.send(categories);
            console.log(categories);
        })
        .catch(err => { console.log(err); })
}

//get all articles for Category
exports.getArticlesByCategory = (req, res) => {

    const { nameCat } = req.params.name;
    Category.findOne({ where: { name: nameCat } })
        .then(categoryto => {
            CategoryProduct.findAll({
                where: { categoryId: categoryto.id },
                //      include: 'category',
                raw: true, nest: true,

            })
                .then(products => {
                    res.send(products)
                })
                .catch(err => { console.log(err); })
        })
        .catch(err => { console.log(err); })
}
//get wishList for user
exports.getWishList = (req, res) => {
    UserProduct.findAll({
        where: { favorited: true },
        limit: 10,
        raw: true
    })
        .then(favoris => {
            res.send(favoris)
        })
        .catch(err => { console.log(err); })
}
