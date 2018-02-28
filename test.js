var path = require('path');


process.env.NODE_ENV = 'test';

// var app = require('app');
// var request = require("supertest").agent(app.listen());

describe('contact page', function() {
  before(function() {
    this.server = http.createServer(app).listen(3000);
  });

  it("has a nice welcoming message", function (done) {
        request
            .get("/")
            .expect("Hello Ben!")
            .end(done);


  // after(function(done) {
  //   this.server.close(done);
  });
});
