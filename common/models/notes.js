// 'use strict';

module.exports = async function (Notes) {

    Notes.getNotes = function (result, cb) {
        Notes.find({
            include: {
                relation: 'userModel', // include the userModel object
                scope: { // further filter the userModel object
                    fields: ['username', 'email'], // only show two fields
                    include: { // include notes for the users
                        relation: 'notes',
                        // scope: {
                        //     where: { userId: 'data.id' } //{ userId: '$state.params.id' }  only select notes with this id 
                        // }
                    }
                }
            }
        }, function (err, data) {
            console.log(data);
            if (err) {
                cb(err);
            } else {
                cb(null, data);
            }
            // cb(null, data);   
        });
    }
    Notes.remoteMethod('getNotes', {
        accepts: { arg: 'id', type: 'string', required: true },
        returns: { arg: 'data', type: 'array' },
        http: { path: '/getNotes', verb: 'get' }
    });

    /********************************************************************************************* */

    var moment = require('moment');
    Notes.reminder = function (id, time, cb) {
        console.log(' ', id, time, cb);

        let date = moment(time).format('MMMM Do YYYY, h:mm:ss a');

        Notes.updateAll({ _id: id }, { rem: date }, function (err, data) {

            if (err) {
                cb(err)

            } else {

                cb(null, data);
            }

        });
    }

    Notes.remoteMethod('reminder', {
        http: {
            path: '/reminder',
            verb: 'post'
        },
        accepts: [

            {
                arg: 'id',
                type: 'string',
                http: {
                    source: 'form'
                }
            },
            {
                arg: 'time',
                type: 'String',
                http: {
                    source: 'form'
                }

            }],
        returns: {
            arg: 'result',
            type: 'string'
        }
    });
    /**************************************************************************************** */

    /*****************************************************************************************/
    Notes.searchByTitle = function (result, cb) {
        console.log("result:-", result);

        Notes.find({ where: { title: result } }, function (err, data) { /* ... */
            if (err) {
                cb(err);
            } else {
                cb(null, data);
            }
        });


    }
    Notes.remoteMethod('searchByTitle', {
        accepts: { arg: 'title', type: 'string', required: true },
        returns: { arg: 'data', type: 'string' },
        http: { path: '/searchByTitle', verb: 'get' }
    });

    /******************************************************************************************/
    Notes.searchByDiscription = function (result, cb) {
        console.log("result:-", result);

        Notes.find({ where: { discription: result } }, function (err, data) { /* ... */
            if (err) {
                cb(err);
            } else {
                cb(null, data);
            }
        });


    }
    Notes.remoteMethod('searchByDiscription', {
        accepts: { arg: 'discription', type: 'string', required: true },
        returns: { arg: 'data', type: 'string' },
        http: { path: '/searchByDiscription', verb: 'get' }
    });

    /*********************************************************************************/

    Notes.searchByColor = function (result, cb) {
        console.log("result:-", result);

        Notes.find({ where: { color: result } }, function (err, data) { /* ... */
            if (err) {
                cb(err);
            } else {
                cb(null, data);
            }
        });


    }
    Notes.remoteMethod('searchByColor', {
        accepts: { arg: 'color', type: 'string', required: true },
        returns: { arg: 'data', type: 'string' },
        http: { path: '/searchByColor', verb: 'get' }
    });
  
    

    /**********************************************TRASH***************************************** */
    Notes.trash=function(id,isTrash,cb){
        console.log('request :',id,isTrash,cb);
        var responce="Mark as deleted"
        Notes.updateAll({ _id: id }, { isTrash: isTrash }, function (err, data) {

            if (err) {
                cb(err)

            } else {

                cb(null, responce);
            }

        });
    }
    Notes.remoteMethod(
        'trash',
        {
            http: { path: '/trash', verb: 'get' },
            accepts:  [{arg: 'id', type: 'string', required: true},
                        {arg:'isTrash',type:'boolean',required:true} ],
            returns: { arg: 'response', type: 'string' }
        }
    );

    /**********************************************************************************/
    Notes.archive=function(id,isArchive,cb){
        console.log('request :',id,isArchive,cb);
        var responce="Archive note successfully"
        Notes.updateAll({ _id: id }, { isArchive: isArchive }, function (err, data) {

            if (err) {
                cb(err)

            } else {

                cb(null, responce);
            }

        });
    }
    Notes.remoteMethod(
        'archive',
        {
            http: { path: '/archive', verb: 'get' },
            accepts:  [{arg: 'id', type: 'string', required: true},
                        {arg:'isArchive',type:'boolean',required:true} ],
            returns: { arg: 'response', type: 'string' }
        }
    );
/***********************************************************************************************/
    Notes.permanantDelete = function (id, cb) {
        console.log('req:', id)
        Notes.destroyById(id, function (err, data) {
            if (err) {
                cb(err)
            }
            else {
                // delete(id)
                var response = "Successfully delete";
                cb(null, data);


            }

        });
    }
    Notes.remoteMethod(
        'permanantDelete',
        {
            http: { path: '/permanantDelete', verb: 'get' },
            accepts: { arg: 'id', type: 'string', required: true },
            returns: { arg: 'response', type: 'string' }
        }
    );
};
