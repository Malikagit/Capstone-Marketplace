const express = require('express');
const router = express.Router();

const controller = require('../controllers/product.controller');
router.get('/', controller.getArticles)
//lister Item by id
router.get('/products/:id', controller.getArticleById);

//create Item
router.post('/products', controller.createArticle)
//update product 
router.put('/products/:id', controller.updatArticle)
router.delete('products/:id', controller.deleteArticle)
router.get('/categories', controller.getCategories)
router.get('/categories/:id', controller.getCatByName)
router.get('/categories/:id/products', controller.getArticlesByCategory)
router.delete('/categories/:id', controller.deleteCategory)
//get favoris
//router.get('/userfavoris', controller.getWishList)

module.exports = router;