var os = require('os');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
   // res.send('welcome os');
    res.json({
        hostname:os.hostname(),
        type:os.type(),
        platform:os.platform(),
    });

    // Endianness
    console.log('endianness : ' + os.endianness());

// OS type
    console.log('type : ' + os.type());

// OS platform
    console.log('platform : ' + os.platform());

// Total system memory
    console.log('total memory : ' + os.totalmem() + " bytes.");

// Total free memory
    console.log('free memory : ' + os.freemem() + " bytes.");
});
router.get('/cpus', function(req, res, next) {
    // res.send('welcome cpus');
    res.json(
        os.cpus()
    );


});
router.get('/cpus/:id', function(req, res, next) {
    // res.send('welcome cpus');
    var ident=req.params.id;
    res.json(
        os.cpus()[ident]
    );


});
module.exports = router;

