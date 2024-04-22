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

/* POST users listing. */
router.post('/', function(req, res, next) {
  var user = req.body;
  users.push(user);
  res.json(user);
});

/* PUT users listing. */
router.put('/:id', function(req, res, next) {
  var userId = req.params.id;
  var updatedUser = req.body;

  for (var i = 0; i < users.length; i++) {
    if (users[i].id == userId) {
      users[i] = updatedUser;
      return res.json(updatedUser);
    }
  }
  res.status(404).json({ message: 'User not found' });
});





module.exports = router;
