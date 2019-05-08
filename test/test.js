/******************************************************************************************
 * @Purpose   :To test the api  of userModels that is login, register ,forgot password and 
 *             reset password as well as Notes api like reminder ,trash and search 
 * @author    : pournima15patle
 * @version   : loopback 3.0
 * @since     : 01-04-2019
 ****************************************************************************************/

/****************************************************************************************
 * @Purpose : To test the login api
 ****************************************************************************************/

var assert = require('chai').assert,
  app = require('../server/server');
var test = require('../test/test.json')
const chai = require('chai');
const http = require('chai-http');
chai.use(http);


describe('userModel', function () {
  var server;
  //this.timeout(15000);
  beforeEach(function (done) {
    console.log('Server staring...')
    server = app.listen(done);
  });

  afterEach(function (done) {
    console.log('Server stopping...')
    server.close(done);
  });

  /****************************************************************************************
   * @Purpose : To test the login api
   ****************************************************************************************/

  it('should log in and log out with live server', function (done) {
    chai.request("http://localhost:3000")
      .post('/api/userModels/login')
      .send(test.login)
      .end(function (err, loginRes) {
        if (err) { return done(err); }
        // this.timeout(15000);
        // setTimeout(done, 15000);
        assert.equal(loginRes.status, 200);
        done();
      });

  });

   /****************************************************************************************
    * @Purpose :To test the register / create new user api
    ****************************************************************************************/

  // it('should create new user with live server', function (done) {
  //   chai.request("http://localhost:3000")
  //     .post('/api/userModels')
  //     .send(test.register)
  //     .end(function (err, loginRes) {
  //       if (err) { return done(err); }
  //       // this.timeout(15000);
  //       // setTimeout(done, 15000);
  //       assert.equal(loginRes.status, 200);
  //       done();
  //     });

  // });

  /***************************************************************************
   * @Purpose : To test the forgot password api
   ***************************************************************************/

  it('should forgot password successfully', function (done) {
    chai.request("http://localhost:3000")
      .post('/api/userModels/reset')
      .send(test.forgot)
      .end(function (err, forgotRes) {
        if (err) { return done(err); }

        assert.equal(forgotRes.status, 204);
        done();
      });
  });

   /***************************************************************************
    * @Purpose : To test the reset password api
    ***************************************************************************/
  it('should reset the password successfully', function (done) {
    chai.request("http://localhost:3000")
      .post('/api/userModels/reset-password')
      .set('Authorization', '5IOjVfVHotnjZ6P48bpsdhG5Qi0Hw9TZpIXxeL9I3pIABtfoJaJBhIvZdB1hRJs3')
      .send(test.reset)
      .end(function (err, loginRes) {
        if (err) { return done(err); }

        assert.equal(loginRes.status, 204);
        done();
      });

  });

});

/*******************************************************************************
 * @Purpose : To test the reminder api 
 *******************************************************************************/
describe('notes', function () {
  var server;

  beforeEach(function (done) {
    server = app.listen(done);
  });

  afterEach(function (done) {
    server.close(done);
  });

  it('should set the reminder for notes', function (done) {
    chai.request("http://localhost:3000")
      .post('/api/notes/reminderNotes')
      .send(test.reminder)
      .end(function (err, reminderRes) {
        if (err) { return done(err); }

        console.log("jhjyug", reminderRes.body);

        assert.equal(reminderRes.status, 200);
        done();
      });
  });

  /**************************************************************************************
   * @Purpose :To test the trash api 
   **************************************************************************************/

  it('should set the notes mark as trash', function (done) {
    chai.request("http://localhost:3000")
      .post('/api/notes/trash')
      .send(test.trash)
      .end(function (err, reminderRes) {
        if (err) { return done(err); }

        console.log("Response", reminderRes.body);

        assert.equal(reminderRes.status, 200);
        done();
      });
  });

  /********************************************************************************
   * @Purpose :To test the archive api 
   ********************************************************************************/

  it('should set the notes mark as archive', function (done) {
    chai.request("http://localhost:3000")
      .post('/api/notes/archive')
      .send(test.archive)
      .end(function (err, reminderRes) {
        if (err) { return done(err); }

        console.log("Response", reminderRes.body);

        assert.equal(reminderRes.status, 200);
        done();
      });
  });
  /********************************************************************************
   * @Purpose :To test the search api 
   ********************************************************************************/

  it('should set the search for notes', function (done) {
    chai.request("http://localhost:3000")
      .get('/api/notes/searchNotes')
      .send(test.search)
      .end(function (err, searchRes) {

        if (err) {

          return done(err);
        }

        console.log("response", searchRes.body);

        assert.equal(searchRes.status, 200);
        done();
      });
  });
});