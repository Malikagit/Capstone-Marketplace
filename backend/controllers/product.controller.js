//const { where } = require('sequelize/types');
const models = require('../models');
const product = require('../models/product');
const Rating = models.Rating;
const Product = models.Product;
const Category = models.Category;
const UserProduct = models.UserProduct
const User = models.User
//lister tous les articles
exports.getArticles = (req, res) => {
    Product.findAll({ raw: true, limit: 16 })
        .then(articles => {
            res.json({ articles })
        })
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
    const { name, description, picturePath, seller } = req.body
    const { idSellere } = req.user
    console.log(idSellere);

    const articleAdd = Product.findOrCreate(
        {
            where: {
                name,
                picturePath,
                description,
                seller: idSellere
            }
        }
    )
        .then(_ => {
            res.json({ message: "hello new product added", name, picturePath, description, seller });
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
    Product.findAll({
        where: { id: req.params.id },

        include: { model: Rating, as: 'ratings', attributes: ['rating', 'comment'] },
        attributes: ['name', 'picturePath']
    })
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            console.log(err);
        });
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
//create Category
exports.createCategory = (req, res) => {
    nameCat = req.body.name;
    Category.findOrCreate({ where: { name: nameCat } })
        .then(_ => res.json({ message: "new category ajoute", nameCat }))
        .catch(err => console.log(err))
}
//get categories
exports.getCategories = (req, res) => {
    Category.findAll({ limit: 10, raw: true })
        .then(categories => {
            res.json(categories);

        })
        .catch(err => { console.log(err); })
}
//get category by name

exports.getCatByName = (req, res) => {
    console.log(req.params.name);
    Category.findAll({ where: { id: req.params.id } })
        .then(cat => {
            console.log(cat);
            res.json(cat)
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

            res.json(products)
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
        .then(catdeleted => { if (catdeleted) res.json('category bien supprimée') })
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
            res.json(favoris)
        })
        .catch(err => { console.log(err); })
}
