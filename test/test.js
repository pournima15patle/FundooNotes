'use strict';
module.exports = async function() {

    var assert = require('assert');
    var should = require('chai').should();
    var expect = require('chai').expect;
    var getNotes = require('../common/models/notes');


    // beforeEach('Setting up the userList', function(){
    //     console.log('beforeEach');
    //     getNotes.loadUserList(['abc123','xyz321']);
    //   });

    describe('getNotes', function() {

        describe('isValidUserId', function() {

            it('should return true if valid user id', function() {
                var isValid = getNotes.isValidUserId('pournima@gmail.com')
                //assert.equal(isValid, true);
                expect(isValid).to.be.true;
            });

            it('should return false if invalid user id', function() {
                var isValid = getNotes.isValidUserId('pournima@gmail.com')
                //assert.equal(isValid, false);
                isValid.should.equal(false);
            });

        }); done()
        /**can write another describe */

    });

    /***************** */
};