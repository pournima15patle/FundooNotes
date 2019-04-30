'use strict';
var multer = require('multer');
var multerS3 = require('multer-s3')
var aws = require('aws-sdk')

var fs = require('fs');


module.exports = function (fileUpload) {
   
    var s3 = new aws.S3({ 
        region: process.env.region,
        accessKeyId: process.env.accessKeyId,
        secretAccessKey:process.env.secretAccessKey,
       
     })


    var upload = multer({
        storage: multerS3({
          s3: s3,
          bucket: 'myfundoobucket',
          acl: 'public-read',
          metadata: function (req, file, cb) {
            cb(null, {fieldName: file.fieldname});
            console.log('file:',file);
            
          },
          key: function (req, file, cb) {
            cb(null, 'image'+Date.now().toString()+'jpeg')
          }
        })
      }).array('file', 12);
     
    fileUpload.upload = function (req, res,file, cb) {
        
       upload(req, res, function (err) {
            if (err) {
                // An error occurred when uploading
                res.json(err);
                

            }else{
                //console.log("filename:",uploadedFileName);
              //  console.log("fhgf",req);
                var file="https://myfundoobucket.s3.ap-south-1.amazonaws.com/"
               // console.log('request', req);
                cb(null,'image'+Date.now().toString()+'jpeg');
            }
           
            
        });
    };


    
    fileUpload.remoteMethod('upload', {
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
};



// var multer = require('multer');
// var fs = require('fs');
// //var path = require('../client/uploads');

// module.exports = function (fileUpload) {
//     var uploadedFileName = '';
//     var storage = multer.diskStorage({
//         destination: function (req, file, cb) {
//             // checking and creating uploads folder where files will be uploaded
//             //var dirPath = __dirname + '/upload';
//             //console.log("fileUpload",req);

//             var dirPath = 'client/upload/'
//             //var dirPath = path.dirname(require.main.filename) + '/client/uploads';
//             if (!fs.existsSync(dirPath)) {
//                 var dir = fs.mkdirSync(dirPath);
//             }
//             cb(null, dirPath + '/');
//         },
//         filename: function (req, file, cb) {
//             // file will be accessible in `file` variable
//           //  console.log('filename');

//             var ext = file.originalname.substring(file.originalname.lastIndexOf("."));
//             var fileName = Date.now() + ext;
//             uploadedFileName = fileName;
//          //   console.log("response", uploadedFileName);

//             cb(null, fileName);
//         }
//     });
//     var upload = multer({
//         storage: storage
//     }).array('file', 12);
//     fileUpload.upload = function (req, res,file, cb) {
        
//         upload(req, res, function (err) {
//             if (err) {
//                 // An error occurred when uploading
//                 res.json(err);
//               //  console.log('errror', err);

//             }else{
//                 cb(null,uploadedFileName);
//             }
           
            
//         });
//     };

//     fileUpload.remoteMethod('upload', {
//         http: {
//             path: '/upload',
//             verb: 'post'
//         },
//         accepts: [{
//             arg: 'req',
//             type: 'object',
//             http: {
//                 source: 'req'
//             }
//         }, {
//             arg: 'res',
//             type: 'object',
//             http: {
//                 source: 'res'
//             }
//         },
//         {
//             arg: 'file',
//             type: 'file',
//             http: {
//                 source: 'form'
//             }
//         }],
//         returns: {
//             arg: 'result',
//             type: 'string'
//         }
//     });
// };

