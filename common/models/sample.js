'use strict';
var multer = require('multer');
var fs = require('fs');
//var path = require('../models');

    module.exports = function (fileUpload) {
        var uploadedFileName = '';
        var storage = multer.diskStorage({
            destination: function (req, file, cb) {
                // checking and creating uploads folder where files will be uploaded
                var dirPath = 'upload/';
                var dirPath = path.dirname(require.main.filename) + '/upload';
                if (!fs.existsSync(dirPath)) {
                    var dir = fs.mkdirSync(dirPath);
                }
                cb(null, dirPath + '/');
            },
            filename: function (req, file, cb) {
                // file will be accessible in `file` variable
                var ext = file.originalname.substring(file.originalname.lastIndexOf("."));
                var fileName = Date.now() + ext;
                uploadedFileName = fileName;
                cb(null, fileName);
            }
        });

        fileUpload.upload = function (req, res, cb) {
            var upload = multer({
                storage: storage
            }).array('file', 12);
            upload(req, res, function (err) {
                if (err) {
                    // An error occurred when uploading
                    res.json(err);
                }
                res.json(uploadedFileName);
            });
        };

        fileUpload.remoteMethod('upload', {
            http: {
                path: '/upload',
                verb: 'post'
            },
            accepts: [{arg: 'req',type: 'object',http: { source: 'req'}},
                      {arg: 'res',type: 'object',http: {source: 'res'}},
                      {arg:'form',type: 'file',http:{source:'res'}}
                     ],
            returns: {
                arg: 'result',
                type: 'string'
            }
        });
    };

