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

  verify(req, res) {
    return User
      .findOne({
        where: { username: req.body['username'],
        password: req.body['password'] },
      })
      .then(function(user){
        if (user != null){
          res.redirect(302, '/');
        } else {
          res.redirect('/error');
        }

      })
  },

};
//
