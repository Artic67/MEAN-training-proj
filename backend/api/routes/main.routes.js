let express = require('express');
let router = express.Router();
const mainController  = require('../controllers/main.controller');

// POST /api/providers
router.post('/providers', mainController.create);

// GET /api/providers
router.get('/providers', mainController.readAll);

// GET One /api/providers/124
router.get('/providers/:id', mainController.readOne);

// PUT /api/providers/124
router.put('/providers/:id', mainController.update);

// DELETE One /api/providers/124
router.delete('/providers/:id', mainController.deleteOne);

// DELETE ALL PROVIDERS /api/providers
router.delete('/providers', mainController.deleteAll);

module.exports = router;