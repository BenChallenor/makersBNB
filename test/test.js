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

});
