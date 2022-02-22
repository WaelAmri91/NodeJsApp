var express = require('express');
var router = express.Router();
var Contact = require('../model/contact');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render("getAllContact.twig");
});
router.get('/add', function(req, res, next) {
    res.render("addContact.twig");
});
router.post('/addAction', function(req, res, next) {
    console.log((req.body));
    var contact = new Contact({
        FullName:req.body.fullname,
        Phone:req.body.Phone
    })
    contact.save();
});

module.exports = router;