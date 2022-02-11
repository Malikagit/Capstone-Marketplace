const models = require('../models')
const Product = models.Product;
const Category = models.Category;


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
//lister products groupeés par categorie
exports.getArticlesByCategory = (req, res) => {
    const { nameCat } = req.params.name;
    const categoryto = Category.findOne({ where: { name: nameCat } })
    Product.findAll({
        where: { categoryId: categoryto.id },
        include: 'category',
        raw: true, nest: true,

    })

}

//add new article
exports.createArticle = (req, res) => {
    const { idSellere } = req.user
    const articleAdd = Product.findOrCreate([{
        name: req.name,
        picturePath: req.body.picturePath,
        description: req.body.description,
        sller: idSellere
    }])
        .then(_ => {
            res.redirect("/procuctDetails");
            console.log(articleAdd);
        })
        .catch(err => { console.error(err) })
}
//update prodcut
exports.updatArticle = async (req, res) => {
    await Product.update({ where: { id: req.params.id } }, {

    })
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