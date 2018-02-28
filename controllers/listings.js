const Listing = require('../models').Listing;

module.exports = {

  create(req, res) {
    console.log(req)
    return Listing
      .create({
        name: req.body['listingname']
      })


  },


};
