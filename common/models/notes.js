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
    // var moment = require('moment');
    // Notes.reminder = function (req, res, id, time, cb) {
    //     console.log(' ', id, time, cb);
    //     let date = moment("2014-02-27T10:00:00").format('DD-MM-YYYY');
    //     let dateMonthAsWord = moment("2014-02-27T10:00:00").format('DD-MMM-YYYY');
    //     // console.log("gfghf", req);
    //     // const currTime = Date.now();
    //     // var date = req.time
    //     // console.log('date :',date)
    //     // var milliseconds = date.getTime(); 
    //     // var rem =currTime+milliseconds;
    //     Notes.updateAll({ _id: id }, function (err, data) {

    //         // console.log(req);
    //         if (err) {
    //             cb(err)
    //             //res.json(err);
    //             //throw (err);
    //         } else {

    //             cb(null, data);
    //         }

    //     });
    //     // cb();
    // }


    // Notes.remoteMethod('reminder', {
    //     http: {
    //         path: '/reminder',
    //         verb: 'post'
    //     },
    //     accepts: [
    //         {
    //             arg: 'req',
    //             type: 'Object',
    //             http: {
    //                 source: 'req'
    //             }
    //         }, {
    //             arg: 'res',
    //             type: 'Object',
    //             http: {
    //                 source: 'res'
    //             }
    //         },
    //         {
    //             arg: 'id',
    //             type: 'string',
    //             http: {
    //                 source: 'form'
    //             }
    //         },
    //         {
    //             arg: 'time',
    //             type: 'String',
    //             http: {
    //                 source: 'form'
    //             }

    //         }],
    //     returns: {
    //         arg: 'result',
    //         type: 'string'
    //     }
    // });

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
    /**************************************************************************************** */

    var moment = require('moment');
 
    Notes.reminder = function (req, res, id, time, cb) {
        console.log(' ', id, time, cb);

        let date = moment(time).format('DD-MM-YYYY');
        let dateMonthAsWord = moment(time).format('DD-MMM-YYYY');
        // console.log("gfghf", req);
        // const currTime = Date.now();
        // var date = req.time
        // console.log('date :',date)
        // var milliseconds = date.getTime(); 
        // var rem =currTime+milliseconds;
        Notes.updateAttributes({_id:id}, function (err, data) {

            // console.log(req);
            if (err) {
                cb(err)
                //res.json(err);
                //throw (err);
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
                arg: 'req',
                type: 'Object',
                http: {
                    source: 'req'
                }
            }, {
                arg: 'res',
                type: 'Object',
                http: {
                    source: 'res'
                }
            },
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
};
