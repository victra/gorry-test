var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).send({
    success: 'true',
    data: {
      greetings: 'Hai from moon'
    }
  })
});

module.exports = router;
