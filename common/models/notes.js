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

    Notes.reminder = function (req, res, data, cb) {
        console.log("gfghf", req);
        const currTime = Date.now();
        var date = req.time
        console.log('date :',date)
        var milliseconds = date.getTime(); 
        var rem =currTime+milliseconds;
        Notes.updateAll({ _id: data.id },function (err, data) {

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
    

    Notes.remoteMethod('upload', {
        http: {
            path: '/reminder',
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
        },{
            arg:'time',
            type:'date',
            http:{
                sourse:'date'
            }
        },
        {
            arg: 'id',
            type: 'string',
            http: {
                source: 'data'
            }
        }],
        returns: {
            arg: 'result',
            type: 'string'
        }
    });


};
