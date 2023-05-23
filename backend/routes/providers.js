var express = require('express');
var router = express.Router();

const providersController = require('../controllers/providers');

/* GET list page. */
router.get('/', providersController.list);

/* GET details page. */
router.get('/info/:id', providersController.details);

/* GET edit provider page. */
router.get('/edit/:id', providersController.edit);

/* POST update provider page. */
router.post('/update/:id', providersController.update);

/* GET add provider page. */
router.get('/add-provider', providersController.addform);

/* POST add provider page. */
router.post('/add', providersController.add);

/* GET delete provider page. */
router.get('/delete/:id', providersController.delete);

module.exports = router;
