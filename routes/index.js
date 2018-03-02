debugger;

const listingsController = require('../controllers').listings;
var path = require('path');

function renderResponse(req, res, message) {
  listingsController.list(req, res)
   .then(function(listings){
      res.render('index', { x: listings, message: message });
    });
}

module.exports = function(app) {

  app.get('/', function(req, res) {
     renderResponse(req, res, "");
   });

   app.post('/', function(req, res) {
      if (isNaN(parseInt(req.body['listingprice']))) {
        renderResponse(req, res, "put a number in the price plz.");
        return;
      }
      listingsController.create(req, res)
       .then(function(listing){ // redirect when success, flash needed.
          res.redirect(302, '/');
        }, function(error) { // render with error on failure
          renderResponse(req, res, "Error!");
        });
    });

    app.post('/user/new', function(req, res) {
      userController.create(req, res)
        .then(function(user) {
          res.redirect(302, '/');
        }, function(error) {
          renderResponse(req,res, "Error!");
        });
     });

  // app.post('/', listingsController.create);

}
