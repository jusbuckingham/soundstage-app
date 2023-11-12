// Import the required modules.
const request = require('supertest'); // supertest is a library to test HTTP servers
const assert = require('assert'); // assert module for assertions
const app = require('../server'); // Import the express application

// Start a server instance before running any tests
let server;
before((done) => {
  server = app.listen(0, done); // Start server on a random available port
});

// Close the server instance after all tests have run
after((done) => {
  server.close(done); // Close server
});

// Describe a test suite for GET /api/soundstages endpoint
describe('GET /api/soundstages', () => {
  // It blocks define individual test cases.
  it('should return an array of sound stages with status code 200', (done) => {
    // Use supertest to simulate an HTTP GET request
    request(server)
      .get('/api/soundstages') // Define the route to test
      .expect('Content-Type', /json/) // Expect the Content-Type header to be "application/json"
      .expect(200) // Expect HTTP status code 200
      .end((err, res) => { // End the test and handle the response or errors
        if (err) return done(err); // If there is an HTTP error, pass it to Mocha

        // Perform an assertion on the response body
        assert(Array.isArray(res.body), 'Response body is not an array');

        // Call done to finish the test case
        done();
      });
  });

});
