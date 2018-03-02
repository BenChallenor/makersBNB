var Browser = require('zombie');
Browser.localhost('localhost.com', 3000)
var browser = new Browser(); // zombie allows to create this fake browser.
// on line 3 we create a new Browser. It knows where to look for content thanks to line 2.

describe('Homepage', function() {

  it( "should have a MakersBNB in the welcome division", function(next) {
    browser.visit('/', function(){
      browser.assert.text('.welcome', 'Welcome to MakersBNB');
      next();
    });
  });

  it( "should add record to the website", function(next) {
    browser.visit('/', function(){
      browser.pressButton('#add_place_button');
      browser.fill('listingname', "Ben's Second House")
      browser.fill('listinglocation', "Bath")
      browser.fill('listingprice', 500)
      browser.fill('listingdescription', 'Buckets and stuff')
      browser.pressButton('submit').then(function() {
        browser.assert.text('.single_listing:last-of-type', 'Ben\'s Second House Bath Buckets and stuff £500'); //last
      })
      next();
    });
  });

  it( "should be able to sign up to the website", function(next) {
    browser.visit('/', function(){
      browser.pressButton('#sign_up');
      browser.fill('username', "Marcus Gardiner");
      browser.fill('email', "mg@gmail.com");
      browser.fill('password', "password123");
      browser.pressButton('register').then(function() {
        browser.assert.text('.username', "Welcome, Marcus Gardiner");
      });
      next();
    });
  });

});
