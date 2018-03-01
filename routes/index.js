debugger;

const listingsController = require('../controllers').listings;
var path = require('path');

module.exports = function(app) {

  app.get('/', function(req, res) {
     listingsController.list(req, res)
      .then(function(listings){
         res.render('index', { x: listings })
       });
   });

  app.post('/', listingsController.create);

}
