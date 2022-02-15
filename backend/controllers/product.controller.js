//const { where } = require('sequelize/types');
const models = require('../models');

const Product = models.Product;
const Category = models.Category;
const CategoryProduct = models.CategoryProduct
const UserProduct = models.UserProduct
//lister tous les articles
exports.getArticles = (req, res) => {
    Product.findAll({ raw: true, limit: 16 })
        .then(articles => { res.send(articles) })
        .catch(err => { res.status(404).send(err) })
}
//afficer detail product 
exports.getArticleById = (req, res) => {
    const idItem = req.params.id;

    Product.findOne({ where: { id: idItem } })
        .then(prodcutData => {
            console.log(prodcutData);
            res.send(prodcutData);

        })
        .catch(err => { res.status(404).send(err) })
}

//add new article
exports.createArticle = (req, res) => {
    //  const { idSellere } = req.user
    const articleAdd = Product.findOrCreate(
        {
            where: {
                name: req.body.name,
                picturePath: req.body.picturePath,
                description: req.body.description,
                seller: 22
            }
        }
    )
        .then(_ => {
            res.redirect("/");
            console.log(articleAdd);
        })
        .catch(err => { console.error(err) })
}
//update prodcut
exports.updatArticle = (req, res) => {
    const id_art = req.params.id;

    Product.update({
        name: req.body.name,
        picturePath: req.body.picturePath,
        description: req.body.description,
        seller: req.user
    },
        {
            where: {
                id: id_art
            }
        })
        .then(modifiedItem => {
            console.log('product bien modifié');
            console.log(modifiedItem);
            //res.redirect(`/products/${id_art}`)
        })
        .catch(err => { console.error(err); })
}
//delete Article
exports.deleteArticle = (req, res) => {
    console.log(req.params.id);
    Product.destroy(
        {
            truncate: { cascade: true }
        },
        { where: { id: req.params.id } }
    )
        .then(_ => {
            res.status(200).send('Item deleted')
            console.log('item bied suprimé');

        })
        .catch(err => { console.error(err); })
}
//get categories
exports.getCategories = (req, res) => {
    Category.findAll({ limit: 10, raw: true })
        .then(categories => {
            res.send(categories);

        })
        .catch(err => { console.log(err); })
}
//get category by name

exports.getCatByName = (req, res) => {
    console.log(req.params.name);
    Category.findAll({ where: { id: req.params.id } })
        .then(cat => {
            console.log(cat);
            res.send(cat)
        })
        .catch(err => { console.log(err); })
}
//get all articles for Category
exports.getArticlesByCategory = (req, res) => {

    //const nameCat = req.params.name;
    // console.log(nameCat);
    // Category.findOne({ where: { name: nameCat } })
    //     .then(categoryto => {
    Product.findAll({
        include:
            [Category]
    })
        .then(products => {
            console.log(products);
            res.send(products)
        })
        .catch(err => { console.log(err); })

    //   .catch(err => { console.log(err); })
}
//delete category
exports.deleteCategory = (req, res) => {
    Category.destroy({ where: { id: req.params.id } })
        .then(catdeleted => { if (catdeleted) res.send('category bien supprimée') })
        .catch(err => { console.log(err); })
}
// //get wishList for user
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
