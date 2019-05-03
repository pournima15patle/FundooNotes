'use strict';
// module.exports = async function () {

    var assert = require('assert');
    var should = require('chai').should();
    var expect = require('chai').expect;
    var getNotes = require('../common/models/notes');
    var chai = require('chai'), chaiHttp = require('chai-http');

    chai.use(chaiHttp);

    // describe('login', function () {

        describe('login', function () {
            // console.log("21 test");

            // it('should return true if valid user id', function () {
            //     // var isValid = getNotes.isValidUserId('pournima@gmail.com')
            //     //assert.equal(isValid, true);
            //     var data = { "email": "pournima@gmail.com", "password": "pournima123" }
            //     // expect(isValid).to.be.true;
            //     // expect.should.have.
            //     expect(res).to.have.status(200);
            // });
            it('fails, as expected', function (done) { // <= Pass in done callback
                var data = { "email": "pournima@gmail.com", "password": "pournima123" }
                chai.request('http://localhost:3000/api/userModels/')
                    .post('login')
                    .send(data)
                    .end(function (err, res) {
                        // console.log(err);
                        //console.log(res.body);

                        expect(res).to.have.status(200);
                        done();                               // <= Call done to signal callback end
                    });
            });

            // it('should return false if invalid user id', function() {
            //     var isValid = getNotes.isValidUserId('pournima@gmail.com')
            //     //assert.equal(isValid, false);
            //     isValid.should.equal(false);
            // });

        });
        /**can write another describe */

    // });

    /***************** */
// };