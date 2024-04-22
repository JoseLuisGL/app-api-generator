var express = require('express');
var router = express.Router();

var users = [
  {
    id : 1,
    name: "Jhon",
    email: "<EMAIL>"
  },
  {
    id: 2,
    name: "Jane",
    email: "<EMAIL>"
  }
];


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

router.post('/', function(req, res, next) {
  var user = req.body;
  users.push(user);
  res.json(user);
});




module.exports = router;
