'use strict';

/****************************************************************************************
 * @Purpose : To test the login api
 ****************************************************************************************/
var assert = require('chai').assert,
    superagent = require('superagent'),
    app = require('../server/server');

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
            .send({ email: 'pournima@gmail.com', password: 'pournima123' })
            //   .set('Accept', 'userModel/json')
            //   .set('Content-Type', 'userModel/json')
            .end(function (err, loginRes) {
                if (err) { return done(err); }

                assert.equal(loginRes.status, 200);
                assert.ok(loginRes.body);
                assert.equal(loginRes.body.userId, '5cbaddc50df4b81fb800a0bd');
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
//             .send({
//                 "firstName": "Kamal",
//                 "lastName": "Katre",
//                 "city": "Pune",
//                 "realm": "string",
//                 "username": "kamal@gmail.com",
//                 "email": "kamal@gmail.com",
//                 "emailVerified": false,
//                 "password": "kamal123"
//             })
//             //   .set('Accept', 'userModel/json')
//             //   .set('Content-Type', 'userModel/json')
//             .end(function (err, registerRes) {
//                 if (err) { return done(err); }

//                 assert.equal(registerRes.status, 200);
//                 assert.ok(registerRes.body);
//                 //assert.equal(registerRes.body.userId, '5cbaddc50df4b81fb800a0bd');
//                 done();
//             });
//     });
// });

/*************************************************************************
 * @Purpose : To test the reset password api
 ***************************************************************************/
describe('userModel', function () {
    var server;

    beforeEach(function (done) {
        server = app.listen(done);
    });

    afterEach(function (done) {
        server.close(done);
    });

    it('should reset the password successfully', function (done) {
        superagent
            .post('http://localhost:3000/api/userModels/reset-password')
            .send({ newPassword: 'pournima1234' })
            .end(function (err, loginRes) {
                if (err) { return done(err); }

                assert.equal(loginRes.status, 200);
                assert.ok(loginRes.body);
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
   
    it('should reset the password successfully', function (done) {
        superagent
            .post('http://localhost:3000/api/userModels/reset-password')
            .send({ newPassword: 'ppp021995@gmail.com' })
            .end(function (err, forgotRes) {
                if (err) { return done(err); }

                assert.equal(forgotRes.status, 200);
                assert.ok(forgotRes.body);
                assert.equal(registerRes.body.userId, ' 5cbd869fce01691b89482a64');
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
            .send({ id: '5cc155a084216f186d66bc89', reminder: '06/06/2019 04:06:00' })

            //   .set('Accept', 'userModel/json')
            //   .set('Content-Type', 'userModel/json')
            .end(function (err, reminderRes) {
                if (err) { return done(err); }

                console.log("jhjyug", reminderRes.body);

                assert.equal(reminderRes.status, 200);
                assert.ok(reminderRes.body);
                //assert.equal(reminderRes.body, ' {result: { count: 1 } }');
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
            .send({ id: '5cc155a084216f186d66bc89', isTrash: true })

            //   .set('Accept', 'userModel/json')
            //   .set('Content-Type', 'userModel/json')
            .end(function (err, reminderRes) {
                if (err) { return done(err); }

                console.log("Response", reminderRes.body);

                assert.equal(reminderRes.status, 200);
                assert.ok(reminderRes.body);
                //assert.equal(reminderRes.body, ' {result: { count: 1 } }');
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
            .send({ id: '5cc155a084216f186d66bc89', isArchive: true })

            //   .set('Accept', 'userModel/json')
            //   .set('Content-Type', 'userModel/json')
            .end(function (err, reminderRes) {
                if (err) { return done(err); }

                console.log("Response", reminderRes.body);

                assert.equal(reminderRes.status, 200);
                assert.ok(reminderRes.body);
                //assert.equal(reminderRes.body, ' {result: { count: 1 } }');
                done();
            });
    });
});


