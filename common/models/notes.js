
/******************************************************************************************
  * @Purpose   :To create Notes related operation set reminder, archive,trash ,find 
  *             notes by title,discription,color etc.
  * @author    : pournima15patle
  * @version   : loopback 3.0
  * @since     : 25-04-2019
  ****************************************************************************************/
// 'use strict';
module.exports = async function (Notes) {
    /*********************************************************************************************
     * @Purpose : Create the api to get the notes with usermodel relation
     *********************************************************************************************/
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

    /********************************************************************************************* 
     * @Purpose : To create the api for setting the reminder for specified id of notes
    **********************************************************************************************/

    //var moment = require('moment');
    Notes.reminderNotes = function (id, reminder, cb) {
        console.log(' ', id, reminder, cb);

        //let date = moment(reminder).format('MMMM Do YYYY, h:mm:ss a');

        Notes.updateAll({ _id: id }, { reminder: reminder }, function (err, data) {

            if (err) {
                cb(err)

            } else {

                cb(null, data);
            }

        });
    }

    Notes.remoteMethod('reminderNotes', {
        http: {
            path: '/reminderNotes',
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
                arg: 'reminder',
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
    /****************************************************************************************
     * @Purpose : To create the api for search the notes by title
     ***************************************************************************************/
    // Notes.searchByTitle = function (result, cb) {
    //     console.log("result:-", result);

    //     Notes.find({ where: { title: result } }, function (err, data) { /* ... */
    //         if (err) {
    //             cb(err);
    //         } else {
    //             cb(null, data);
    //         }
    //     });


    // }
    // Notes.remoteMethod('searchByTitle', {
    //     accepts: { arg: 'title', type: 'string', required: true },
    //     returns: { arg: 'data', type: 'string' },
    //     http: { path: '/searchByTitle', verb: 'get' }
    // });

    /*****************************************************************************************
     * @Purpose : To create the api for search the notes by Discription
     ******************************************************************************************/
    // Notes.searchByDiscription = function (result, cb) {
    //     console.log("result:-", result);

    //     Notes.find({ where: { discription: result } }, function (err, data) { /* ... */
    //         if (err) {
    //             cb(err);
    //         } else {
    //             cb(null, data);
    //         }
    //     });


    // }
    // Notes.remoteMethod('searchByDiscription', {
    //     accepts: { arg: 'discription', type: 'string', required: true },
    //     returns: { arg: 'data', type: 'string' },
    //     http: { path: '/searchByDiscription', verb: 'get' }
    // });

    /**************************************************************************************
     * @Purpose : To create the api for search the notes by color
     ***************************************************************************************/

    // Notes.searchByColor = function (result, cb) {
    //     console.log("result:-", result);

    //     Notes.find({ where: { color: result } }, function (err, data) { /* ... */
    //         if (err) {
    //             cb(err);
    //         } else {
    //             cb(null, data);
    //         }
    //     });


    // }
    // Notes.remoteMethod('searchByColor', {
    //     accepts: { arg: 'color', type: 'string', required: true },
    //     returns: { arg: 'data', type: 'string' },
    //     http: { path: '/searchByColor', verb: 'get' }
    // });



    /**********************************************TRASH*****************************************
     * @Purpose : To create the api for trash and setting the flag in notes. 
     *******************************************************************************************/
    Notes.trash = function (id, isTrash, cb) {
        console.log('request :', id, isTrash, cb);
        var responce = "Mark as deleted"
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
            http: { path: '/trash', verb: 'post' },
            accepts: [{ arg: 'id', type: 'string', required: true },
            { arg: 'isTrash', type: 'boolean', required: true }],
            returns: { arg: 'response', type: 'string' }
        }
    );

    /****************************************************************************************
     * @Purpose : To create the api for archive and setting the flag in notes 
     *****************************************************************************************/
    Notes.archive = function (id, isArchive, cb) {
        console.log('request :', id, isArchive, cb);
        var responce = "Archive note successfully"
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
            http: { path: '/archive', verb: 'post' },
            accepts: [{ arg: 'id', type: 'string', required: true },
            { arg: 'isArchive', type: 'boolean', required: true }],
            returns: { arg: 'response', type: 'string' }
        }
    );
    /**********************************************************************************************
     * @Purpose : To create the api for Permanant delete and delete the notes from db
     **********************************************************************************************/
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

        /**********************************************************************************
         * @Purpose : To search the notes by using title and discription.
         **********************************************************************************/
    Notes.searchNotes = function (result, cb) {
      
       console.log("result for search: ", result);
       
        var pattern = new RegExp('.*'+result+'.*', "i"); /* case-insensitive RegExp search */
       
        Notes.find({ where: {or: [{title: { like: pattern}}, {discription: { like: pattern} }]} },function (err, data) {
            
            if (err) {
                cb(err);
            } else {
                cb(null, data);
            }
        });


    }
    Notes.remoteMethod('searchNotes', {
        accepts: { arg: 'search', type: 'string', required: true },
        returns: { arg: 'data', type: 'string' },
        http: { path: '/searchNotes', verb: 'get' }
    });
};
