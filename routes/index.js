var express = require('express');
var router = express.Router();

const termsController = require('../controllers').terms;
const stepsController = require('../controllers').steps;

router.get('/api', (req, res) => res.status(200).send({
  message: 'Welcome to Petit API!',
}));

router.post('/api/terms', termsController.create);
router.get('/api/terms', termsController.list);
router.post('/api/steps', stepsController.create);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});





module.exports = router;
