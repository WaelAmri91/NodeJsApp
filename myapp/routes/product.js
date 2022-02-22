var prod = require('../products.json')
var express = require('express');
const os = require("os");
var router = express.Router();

router.get('/', function(req, res, next) {
    // res.send('welcome os');
    res.json({
        prod
    });
});
router.get('/:id', function(req, res, next) {
    // res.send('welcome os');
    var ind=req.params.id;
    res.json(
        prod[ind]
    );
});
router.get('/:id/:qt', function(req, res, next) {
    // res.send('welcome os');
    var ident=req.params.id;
    var qte=req.params.qt;
    res.json({
        "id": ident,
        "qt": qte,
        "unit_price": prod[ident].price,
        "total_price": prod[ident].price * qte


    });
});
    module.exports = router;