var express = require('express');
var router = express.Router();

// REST API
router.
  get('/', function(req, res) {
    res.json({
      some: 'json'
    });
  }).
  get('/:id', function(req, res) {
    res.json({
      'provided id': req.params.id
    });
  });

module.exports = router;
