var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
var places = [
{ name: 'Germany', rating: 10 },
{ name: 'Hawaii', rating: 7 },
{ name: 'Canada', rating: 8 },
{ name: 'Paris', rating: 9 },
{ name: 'Washington State', rating: 6 }
];
// create a name
var myname = "Jasmine";
res.render('index', {
title: 'Favorite Places',
places: places,
myname: myname
});
});
module.exports = router;