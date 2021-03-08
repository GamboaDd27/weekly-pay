// Import the dependencies for testing
const chai=require('chai');
const chaiHttp=require('chai-http');
const app= require('../main');
// Configure chai
chai.use(chaiHttp);
chai.should();
describe("Views", () => {
    describe("GET /", () => {
        // Test to get all students record
        it("should render a view", (done) => {
             chai.request(app)
                 .get('/')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });
         
        // Test to get single student record
        it("should not render a view", (done) => {
             const id = 5;
             chai.request(app)
                 .get(`/${id}`)
                 .end((err, res) => {
                     res.should.have.status(404);
                     done();
                  });
         });
    });
});