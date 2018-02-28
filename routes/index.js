const listingsController = require('../controllers').listings;
var path = require('path');

module.exports = (app) => {

  app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/../views/index.html'));
  });

  app.post('/');

};
