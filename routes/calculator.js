var express = require('express');
var bodyParser = require('body-parser');
var Verify = require('./verify');
var calRouter = express.Router();

calRouter.use(bodyParser.json());
calRouter.route('/')
.get(Verify.verifyOrdinaryUser, function (req, res, next) {

	// res.end('Great Job!!!!');
   // res.writeHead(200, { 'Content-Type': 'text/plain' });
   res.render('pages/calculator');
   // next();
})
module.exports = calRouter;

// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   // res.render('index', { title: 'Express' });
//   res.render('pages/calculator');
// });

// module.exports = router;
