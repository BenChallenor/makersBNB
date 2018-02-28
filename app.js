const express = require('express');
const Listing = require('./models/listing.js');
const listingsController = require('./controllers');
const app = express();
var bodyParser = require('body-parser');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, () => console.log('Example app listening on port 3000!'))

require('./routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

module.exports = app;
