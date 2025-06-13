const express = require('express');
const router = express.Router();
const autoresController = require('../controllers/autoresController');

router.get('/', autoresController.getAutores);

router.post('/', autoresController.createAutor);

router.get('/:id/posts', autoresController.getPostsDeAutor);

module.exports = router;