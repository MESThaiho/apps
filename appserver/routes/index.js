var express = require('express');
var router = express.Router();
var homeController = require('../controllers/index');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express module' });
// });
router.get('/',homeController.index);
module.exports = router;
