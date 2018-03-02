const User = require('../models').User;

module.exports = {
  create(req, res) {
    return User
      .create({
        username: req.body['username'],
        email: req.body['email'],
        password: req.body['password']
      })
  },

};
