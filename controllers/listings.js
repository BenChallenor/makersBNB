const Listing = require('../models').Listing;

module.exports = {
  create(req, res) {
    return Listing
      .create({
        name: req.body['listingname']
      })
  },
};
