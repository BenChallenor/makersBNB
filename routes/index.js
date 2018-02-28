debugger;

const listingsController = require('../controllers').listings;
var path = require('path');

module.exports = (app) => {

  // app.get('/', function(req, res) {
  //   models.Listing.findAll().then(function(listings) {
  //     res.render('index', { listings: listings })
  //   });
  // });

  app.get('/', function(req, res) {
     listingsController.list(req, res)
     .then(function(listings){
       console.log(listings);
       res.render('index', { x: listings })
     });
     // res.render('index', { x: testvariable })
  });

  // app.get('/listings', listingsController.list);

  app.post('/', listingsController.create);

};
