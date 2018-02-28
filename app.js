const express = require('express');
const Listing = require('./models/listing.js');
const listingsController = require('./controllers');

const app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
