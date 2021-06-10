var express = require('express');
var router = express.Router();

router.get("/", (req, res) {
    res.render("portafolio", { title: 'portafolio' });
  });
  
module.exports = router;
  