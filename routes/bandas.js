let express = require('express');
let router = express.Router();
let bandasController = require('../controllers/bandasController');

router.get('/', bandasController.index);

router.get('/detalle/:id', bandasController.detalle);

router.get('/genero/:gen', bandasController.porGenero);

module.exports = router;