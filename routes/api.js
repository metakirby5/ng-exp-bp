var express = require('express');
var router = express.Router();

/* GET api . */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

module.exports = router;
