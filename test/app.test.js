const { app, server } = require('../app'); // Import both app and server
const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;

chai.use(chaiHttp);

describe('GET /', () => {
  it('should return Hello World', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello World');
        done();
      });
  });

  // Close the server after running tests
  after(done => {
    server.close(done);
  });
});
