const Router = require('express');
const router = new Router();
const addController = require('../controllers/add-controller.js');

router.get('/getAdds', addController.getAdverts);

module.exports = router
