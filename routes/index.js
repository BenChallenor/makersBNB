debugger;

const listingsController = require('../controllers').listings;
const usersController = require('../controllers').users;
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

   app.post('/create_listing', function(req, res) {
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

    app.post('/create_user', function(req, res) {
       // if (isNaN(parseInt(req.body['listingprice']))) {
       //   renderResponse(req, res, "put a number in the price plz.");
       //   return;
       // }
       usersController.create(req, res)
        .then(function(user){ // redirect when success, flash needed.
           res.redirect(302, '/');
         }, function(error) { // render with error on failure
           renderResponse(req, res, "Error!");
         });
     });

     app.post('/login', function(req, res) {
       // if (isNaN(parseInt(req.body['listingprice']))) {
       //   renderResponse(req, res, "put a number in the price plz.");
       //   return;
       // }
        usersController.verify(req, res)
        // console.log(req)
        // console.log('******')
        // console.log(res)
        //  .then(function(user){ // redirect when success, flash needed.
        //     res.redirect(302, '/');
        //   }, function(error) { // render with error on failure
        //     renderResponse(req, res, "Error!");
        //   });
      });

      app.get('/error', function(req, res) {
        renderResponse(req, res, "Incorrect login, try again!");
       });
  // app.post('/', listingsController.create);

}
