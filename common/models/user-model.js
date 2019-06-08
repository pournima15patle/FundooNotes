/******************************************************************************************
  * @Purpose   :To create user in userModel and  related operation dissable api 
  *             notes by title,discription,color etc.
  * @author    : pournima15patle
  * @version   : 1.0
  * @since     : 25-04-2019
  ****************************************************************************************/
'use strict';
module.exports = function (Usermodel) {
  var config = require('../../server/config.json');
  var helper = require('./helper')
  var app = require('../../server/server')
  /*****************************************************************
   * @Purpose : To disable the api which is conflicted
   *****************************************************************/

  helper.disableAllMethods(Usermodel, ["create", "login", "setPassword", "resetPassword"]);

  /******************************************************************************
   * @Purpose : To send the mail to login user for forgetting the Password
   *****************************************************************************/

  Usermodel.on('resetPasswordRequest', function (info) {
    /* taking the host and port number in url variable */
    var url = 'http://localhost:4200/resetPassword'
    var html = 'Click <a href="' + url + '/' +
      info.accessToken.id + '">here</a> to reset your password';

    // sending email by send method
    Usermodel.app.models.Email.send({
      to: info.email, // taking email from the request
      from: 'ppp021995@gmail.com',
      subject: 'Password reset',
      html: html,
    }, function (err) {
      console.log('error', err);

      if (err) return console.log('> error sending password reset email');
      console.log('> sending password reset email to:', info.email);
    });
  });

  //to store the token in redis cache 
  var redis = require('redis');
  var client = redis.createClient();

  // Usermodel.afterRemote('login', function(data, abc, next) {
  //   console.log('Token is :', data.result.id);

  //   client.set('token', data.result.id, redis.print);

  //   client.get('token', (err, reply) => {
  //     if (err) {
  //       throw err;
  //     }
  //     console.log('Result from redis:', reply.toString());
  //   });
  //   next();
  // });

  /************************************************* */
  Usermodel.afterRemote('login', function (ctx, remoteMethodOutput, next) {
    console.log(ctx.result);

    var user = app.models.userModel;
    console.log("data", user);

    console.log("datadata", ctx.result.userId);
    user.find({ where: { id: ctx.result.userId } }, function (err, data) {
      // console.log("dsafd",data);
        ctx.result.firstName = data[0].firstName,
        ctx.result.lastName = data[0].lastName,
        ctx.result.email = data[0].email,
        ctx.result.Profile = data[0].Profile
      next();
    })
  })
  /******************************************************************************************************
   * to upload the image in s3
   ******************************************************************************************************/
  var multer = require('multer');
  var multerS3 = require('multer-s3')
  var aws = require('aws-sdk')

  var fs = require('fs');

  var s3 = new aws.S3({
    region: process.env.region,
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,

  })


  var upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: 'myfundoobucket',
      acl: 'public-read',
      metadata: function (req, file, cb) {
        cb(null, { fieldName: file.fieldname });
        // console.log('file:', file);

      },
      key: function (req, file, cb) {
        cb(null, 'image' + Date.now().toString() + '.jpeg')
      }
    })
  }).array('file', 12);

  Usermodel.upload = function (req, res, file, cb) {

    upload(req, res, function (err) {
      // console.log("response", req.files[0].location);
      if (err) {

        // An error occurred when uploading
        res.json(err);
      } else {
        //console.log("filename:",uploadedFileName);
        //  console.log("fhgf",req);
        var file = "https://myfundoobucket.s3.ap-south-1.amazonaws.com/"
        console.log('request', req);
        //cb(null, req.files[0].location);
        var url = req.files[0].location;
        // console.log(" remote method for userid:",req.data.userId);

        Usermodel.updateAll({ _id: req.currentUser }, { Profile: url }, function (err, data) {
          if (err) {
            return cb(err)
          } else {
            return cb(null, url);
          }
        });
      }
      console.log(" file path", req.files[0].location);



    });


  };



  Usermodel.remoteMethod('upload', {
    http: {
      path: '/upload',
      verb: 'post'
    },
    accepts: [{
      arg: 'req',
      type: 'object',
      http: {
        source: 'req'
      }
    }, {
      arg: 'res',
      type: 'object',
      http: {
        source: 'res'
      }
    },
    {
      arg: 'file',
      type: 'file',
      http: {
        source: 'form'
      }
    }],
    returns: {
      arg: 'result',
      type: 'string'
    }
  });


  // Usermodel.afterRemote('upload', function (ctx, remoteMethodOutput, next) {
  //   console.log("after upload", ctx);
  //   console.log("after upload",userId);
  //   console.log("datadata", ctx.result);

  //   Usermodel.updateAll({ id: ctx.result.userId }, { profile: ctx.result }, function (err, data) {
  //     if (err) {
  //       cb(err)

  //     } else {

  //       cb(null, data);
  //     }
  //   });
  // })
};


// Fundoouser.updateAll({_id:req.currentUser}, { Profile: url }, function (err, data) 
// {
// if (err) {
// return cb(err)
// } else {
// return cb(null, data);
// }
// });