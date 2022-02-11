const express = require('express');
const router = express.Router();

const controller = require('../controllers/product.controller');
router.get('/', controller.getArticles)
//lister Item by id
router.get('/products/:id', controller.getArticleById);
//poducts by category
router.get('/categories/:name/products', controller.getArticlesByCategory)
//create Item
router.post('/product', controller.createArticle)
//update product 
router.put('/product/:id', controller.updatArticle)
router.delete('products/:id', controller.deleteArticle)


module.exports = router;