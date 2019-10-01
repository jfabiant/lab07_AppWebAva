var express = require('express');
var router = express.Router();

/* GET dashboard page. */
router.get('/', function (req, res, next) {

  const datos = {
    "nombres": "Kassandra",
    "apellidos": "Matalozano"
  }

  res.render('dash', datos, (err, html) => {
    res.render('layout', {
      "tituloSeccion": "Dashboard",
      "seccion": html
    });
  });
  
});

module.exports = router;
