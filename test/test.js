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

  it( "should show the listings when you fill in the form", function(next) {
    browser.visit('/', function() {
      browser.pressButton('#add_place_button')
      browser.fill('listingname', 'TESTNAME')
      browser.fill('listinglocation', 'TESTLOCATION')
      browser.fill('listingprice', '100')
      browser.fill('listingdescription', 'TESTDESCRIPTION')
      browser.pressButton('submit').then(function() {
      browser.assert.text('.single_listing', 'TESTNAME');
    })
      next();
    });
  });

});
