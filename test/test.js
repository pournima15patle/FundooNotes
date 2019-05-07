'use strict';

/******************************************************************************************
  * @Purpose   :To create Notes related operation set reminder, archive,trash ,find 
  *             notes by title,discription,color etc.
  * @author    : pournima15patle
  * @version   : loopback 3.0
  * @since     : 30-04-2019
  ****************************************************************************************/

/****************************************************************************************
 * @Purpose : To test the login api
 ****************************************************************************************/
var assert = require('chai').assert,
    superagent = require('superagent'),
    app = require('../server/server');
var test = require('../test/test.json')

describe('userModel', function () {
    var server;

    beforeEach(function (done) {
        server = app.listen(done);
    });

    afterEach(function (done) {
        server.close(done);
    });

    it('should log in and log out with live server', function (done) {
        superagent
            .post('http://localhost:3000/api/userModels/login')
            .send(test.login)
            .end(function (err, loginRes) {
                if (err) { return done(err); }

                assert.equal(loginRes.status, 200);
                done();
            });
    });
});

/****************************************************************************************
 * @Purpose :To test the register / create new user api
 ****************************************************************************************/
// describe('userModel', function () {
//     var server;

//     beforeEach(function (done) {
//         server = app.listen(done);
//     });

//     afterEach(function (done) {
//         server.close(done);
//     });

//     it('should register the new user', function (done) {
//         superagent
//             .post('http://localhost:3000/api/userModels')
//             .send(test.register)
//             .end(function (err, registerRes) {
//                 if (err) { return done(err); }

//                 assert.equal(registerRes.status, 200);
//               
//                 done();
//             });
//     });
// });

/*************************************************************************
 * @Purpose : To test the reset password api
 ***************************************************************************/
describe('userModel', function () {
    var server;
    var access_token = '8JFHpxueeo79OGCtGOtVfXBAZ0B537dqwEWKtJlfQTvHwnw8gaVMB6xiIFwmuXoC'

    beforeEach(function (done) {
        server = app.listen(done);
    });

    afterEach(function (done) {
        server.close(done);
    });

    it('should reset the password successfully', function (done) {
        superagent
            .post('http://localhost:3000/api/userModels/reset-password')
            .set("accessToken", access_token)
            .send(test.reset)
            .end(function (err, loginRes) {
                if (err) { return done(err); }

                assert.equal(loginRes.status, 200);
                done();
            });

    });
});
/*************************************************************************
 * @Purpose : To test the forgot password api
 ***************************************************************************/
describe('userModel', function () {
    var server;

    beforeEach(function (done) {
        server = app.listen(done);
    });

    afterEach(function (done) {
        server.close(done);
    });

    it('should forgot password successfully', function (done) {
        superagent
            .post('http://localhost:3000/api/userModels/reset')
            .send(test.forgot)
            .end(function (err, forgotRes) {
                if (err) { return done(err); }

                assert.equal(forgotRes.status, 204)
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
        superagent
            .post('http://localhost:3000/api/notes/reminderNotes')
            .send(test.reminder)
            .end(function (err, reminderRes) {
                if (err) { return done(err); }

                console.log("jhjyug", reminderRes.body);

                assert.equal(reminderRes.status, 200);
                done();
            });
    });
});
/**************************************************************************************
 * @Purpose :To test the trash api 
 **************************************************************************************/
describe('notes', function () {
    var server;

    beforeEach(function (done) {
        server = app.listen(done);
    });

    afterEach(function (done) {
        server.close(done);
    });

    it('should set the notes mark as trash', function (done) {
        superagent
            .post('http://localhost:3000/api/notes/trash')
            .send(test.trash)
            .end(function (err, reminderRes) {
                if (err) { return done(err); }

                console.log("Response", reminderRes.body);

                assert.equal(reminderRes.status, 200);
                done();
            });
    });
});
/********************************************************************************
 * @Purpose :To test the archive api 
 ********************************************************************************/
describe('notes', function () {
    var server;

    beforeEach(function (done) {
        server = app.listen(done);
    });

    afterEach(function (done) {
        server.close(done);
    });

    it('should set the notes mark as archive', function (done) {
        superagent
            .post('http://localhost:3000/api/notes/archive')
            .send(test.archive)
            .end(function (err, reminderRes) {
                if (err) { return done(err); }

                console.log("Response", reminderRes.body);

                assert.equal(reminderRes.status, 200);
                done();
            });
    });
});
/********************************************************************************
 * @Purpose :To test the search api 
 ********************************************************************************/
// describe('notes', function () {
//     var server;

//     beforeEach(function (done) {
//         server = app.listen(done);
//     });

//     afterEach(function (done) {
//         server.close(done);
//     });

//     it('should find the notes using title and disciption', function (done) {
//         superagent
//             .get('http://localhost:3000/api/notes/searchNotes')
//             //.accept(test.search)
//             .send(test.search)
//             .end(function (err, searchRes) {
//                 if (err) { return done(err); }

//                 console.log("Response", searchRes.body);

//                 assert.equal(searchRes.status, 200);
//                 done();
//             });
//     });
// });
describe('notes', function () {
    var server;

    beforeEach(function (done) {
        server = app.listen(done);
    });

    afterEach(function (done) {
        server.close(done);
    });

    it('should set the search for notes', function (done) {
        superagent
            .get('http://localhost:3000/api/notes/searchNotes')
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

