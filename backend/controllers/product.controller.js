//const { where } = require('sequelize/types');
const models = require('../models');
const product = require('../models/product');

const Product = models.Product;
const Category = models.Category;

const UserProduct = models.UserProduct
const User = models.User
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
            res.json({ message: "hello new product added" });
            //  console.log(articleAdd);
        })
        .catch(err => { console.error(err) })
}
//update prodcut
exports.updatArticle = async (req, res) => {

    const id_art = req.params.id;
    let product = await Product.findOne({ where: { id: id_art } });
    if (product === null) {
        res.json({ message: "Product not found" })
    } else {
        const { name, description, picturePath, seller } = req.body

        Product.update({
            name,
            picturePath,
            description,
            seller
        },
            {
                where: {
                    id: id_art
                }
            })
            .then(_ => {
                res.json({ message: "produit bien modifie" })

            })
            .catch(err => { console.error(err); })
    }
}
//get ratingArticle
exports.getRatingArticle = (req, res) => {
    this.getRatingArticle.findAll(
        {
            where: { productId: req.params.id }
        },
        {
            attributes: {
                include: [
                    [sequelize.fn('COUNT', sequelize.col('rating')), 'n_ratings']
                ]
            }
        })
        .then(_ => {
            res.send.json()
        })

        .catch(err => { console.log(err); })
}
//delete Article
exports.deleteArticle = (req, res) => {
    const eldeleted = Product.destroy(
        { where: { id: req.params.id } }
    )
        .then(_ => {
            if (eldeleted)
                res.status(200).send('Item deleted')
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
    Category.findOne({
        where: { id: req.params.id },
        include:
            [{
                model: Product

            }
            ]
    })
        .then(products => {

            res.send(products)
        })
        .catch(err => { console.log(err); })

    //   .catch(err => { console.log(err); })
}
//update Category
exports.updateCategory = (req, res) => {
    const name = req.body.name
    Category.update({
        name

    },
        {
            where: { id: req.params.id }
        })
        .then(_ => {
            res.json({ message: "category bien modifie", name })
        })
}

//delete category
exports.deleteCategory = (req, res) => {
    Category.destroy({ where: { id: req.params.id } })
        .then(catdeleted => { if (catdeleted) res.send('category bien supprimée') })
        .catch(err => { console.log(err); })
}
// //get wishList for user
exports.getWishList = (req, res) => {
    User.findAll(
        {
            where: { id: req.params.id },
            include: [{
                model: Product,
                as: 'items'
                ,
                through: {
                    model: UserProduct,
                    attributes: ['userId', 'productId', 'favorited'],
                    where: { favorited: true }
                }
            }]
            // where: { id: req.params.id, favorited: true }
        })
        .then(favoris => {
            res.send(favoris)
        })
        .catch(err => { console.log(err); })
}
