const Listing = require('../models').Listing;

module.exports = {
  create(req, res) {
    return Listing
      .create({
        name: req.body['listingname']
      })
      // .then(todo => res.status(201).send(todo))
      // .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return Listing
      .all()
  },

}
