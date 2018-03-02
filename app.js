const express = require('express');
const Listing = require('./models/listing.js');
const listingsController = require('./controllers');
const app = express();
var bodyParser = require('body-parser');

// var jquery = require('jquery');
app.set('view engine', 'ejs');

// app.use(express.static(__dirname + "/public"));
app.use("/public",express.static(__dirname + "/public")); // put jquery (and other static things like css and images) to public and load it

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(3000, () => console.log('Example app listening on port 3000!'))

require('./routes')(app);
app.get('*', (req, res) => res.status(404).send({
  message: 'Not found.',
}));

module.exports = app;
