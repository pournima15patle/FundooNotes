'use strict';
module.exports = function(Usermodel) {
  var config = require('../../server/config.json');
  var helper=require('./helper')
/*****************************************************************
 * @Purpose: To disable the api which is conflicted
 *****************************************************************/
  // Usermodel.disableRemoteMethod('findById', true);
  // Usermodel.disableRemoteMethod('replaceById', true);
  // Usermodel.disableRemoteMethod('deleteById', true);
  // Usermodel.disableRemoteMethod('changePassword', true);

  // Usermodel.disableRemoteMethod('upsert', true);
  // Usermodel.disableRemoteMethod('updateAll', true);
  // Usermodel.disableRemoteMethod('logout', true);
  // Usermodel.disableRemoteMethod('find', true);
  // Usermodel.disableRemoteMethod('createChangeStream', true);
  // Usermodel.disableRemoteMethod('upsertWithWhere', true);
  // Usermodel.disableRemoteMethod('findOne', true);
  // Usermodel.disableRemoteMethod('replaceOrCreate', true);
  // Usermodel.disableRemoteMethod('confirm', true);
  // Usermodel.disableRemoteMethod('count', true);
  // Usermodel.disableRemoteMethod('exists', true);

  // Usermodel.disableRemoteMethod('verify', false);
  // Usermodel.disableRemoteMethod('user-password', false);
  // Usermodel.disableRemoteMethod('updateAttributes', false);

  // // disable api by using the access token
  // Usermodel.disableRemoteMethod('__count__accessTokens', false);
  // Usermodel.disableRemoteMethod('__create__accessTokens', false);
  // Usermodel.disableRemoteMethod('__delete__accessTokens', false);
  // Usermodel.disableRemoteMethod('__destroyById__accessTokens', false);
  // Usermodel.disableRemoteMethod('__findById__accessTokens', false);
  // Usermodel.disableRemoteMethod('__get__accessTokens', false);
  // Usermodel.disableRemoteMethod('__updateById__accessTokens', false);
   helper.disableAllMethods(Usermodel, ["create", "login", "setPassword", "resetPassword"]);
    /******************************************************************************
     * @Purpose : To send the mail to login user for forgetting the Password
     *****************************************************************************/
  Usermodel.on('resetPasswordRequest', function(info) {
    var url = 'http://' + config.host + ':' + config.port + '/reset-password';
    var html = 'Click <a href="' + url + '?access_token=' +
            info.accessToken.id + '">here</a> to reset your password';

    // sending email by send method
    Usermodel.app.models.Email.send({
      to: info.email, // taking email from the request
      from: 'ppp021995@gmail.com',
      subject: 'Password reset',
      html: html,
    }, function(err) {
      console.log('error', err);

      if (err) return console.log('> error sending password reset email');
      console.log('> sending password reset email to:', info.email);
    });
  });

    // connection to the redis db
  var redis = require('redis');
  var client = redis.createClient();

  Usermodel.afterRemote('login', function(data, abc, next) {
    console.log('Token is :', data.result.id);

    client.set('token', data.result.id, redis.print);

    client.get('token', (err, reply) => {
      if (err) {
        throw err;
      }
      console.log('Result from redis:', reply.toString());
    });
    next();
  });

/************************************************* */

Usermodel.addUser=function(req,res,cb){
  var abc="thjtgjh";
  res.json("It has valid token", req.user);
 cb(null,data);
}

Usermodel.remoteMethod('addUser', {
 
  returns: { arg: 'data', type: 'string' },
  http: { path: '/addUser', verb: 'get' }
});

};
