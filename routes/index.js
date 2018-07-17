let express = require('express');
let router = express.Router();
let fs = require('fs')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FIFA-EMONITOR' });
});
router.get('/getdata', function(req, res, next) {
  let data = fs.readFileSync('./data/data.json')
  res.send(data)
});
module.exports = router;
