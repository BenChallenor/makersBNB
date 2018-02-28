const Listing = require('../models').Listing;

module.exports = {
  create(req, res) {
    console.log(req);
    return Listing
      .create({
        name: req.body['listingname'],
        location: req.body['listinglocation'],
        description: req.body['listingdescription'],
        price: req.body['listingprice']
      })
  },

  list(req, res) {
    return Listing
      .all()
    .then(listings => res.status(200).send(listings));
  },

};

