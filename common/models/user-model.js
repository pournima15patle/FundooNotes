/******************************************************************************************
  * @Purpose   :To create user in userModel and  related operation dissable api 
  *             notes by title,discription,color etc.
  * @author    : pournima15patle
  * @version   : 1.0
  * @since     : 25-04-2019
  ****************************************************************************************/
'use strict';
 module.exports = function(Usermodel) {
  var config = require('../../server/config.json');
  var helper=require('./helper')
/*****************************************************************
 * @Purpose: To disable the api which is conflicted
 *****************************************************************/
 
   helper.disableAllMethods(Usermodel, ["create", "login", "setPassword", "resetPassword"]);

  /******************************************************************************
   * @Purpose : To send the mail to login user for forgetting the Password
   *****************************************************************************/
  Usermodel.on('resetPasswordRequest', function(info) {
    /*taking the host and port number in url variable */
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

   //to store the token in redis cache 
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
 cb(null,abc);
}

Usermodel.remoteMethod('addUser', {
  accept:[{arg:'req',type:'string'},{arg:'res',type:'string'}],
  returns: { arg: 'data', type: 'string' },
  http: { path: '/addUser', verb: 'get' }
});

};
