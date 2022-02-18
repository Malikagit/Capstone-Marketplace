const express = require('express');
const { requireAuth, requireAdmin } = require('../config/middlewares');
const router = express.Router();


const controller = require('../controllers/product.controller');
router.get('/', controller.getArticles)
//lister Item by id
router.get('/products/:id', controller.getArticleById);

//create Item
router.post('/products', requireAuth, controller.createArticle)
//update product 
router.put('/products/:id', requireAuth, controller.updatArticle)
router.get('/products/:id/rating', controller.getRatingArticle)
router.delete('/products/:id', requireAuth, controller.deleteArticle)
router.post('/categories', requireAdmin, controller.createCategory)
router.get('/categories', controller.getCategories)
router.get('/categories/:id', controller.getCatByName)
router.get('/categories/:id/products', controller.getArticlesByCategory)
router.put('/categories/:id', requireAdmin, controller.updateCategory)
router.delete('/categories/:id', requireAdmin, controller.deleteCategory)
//get favoris
router.get('/userfavoris/:id', requireAuth, controller.getWishList)

module.exports = router;