'use strict';

module.exports = async function(Notes) {

    Notes.getNotes = function (result, cb) {
        Notes.find({
            include: {
                relation: 'userModel', // include the userModel object
                scope: { // further filter the userModel object
                    fields: ['username', 'email'], // only show two fields
                    include: { // include notes for the users
                        relation: 'notes',
                        scope: {
                            where: { userId: 'data.id' } //{ userId: '$state.params.id' }  only select notes with this id 
                        }
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
};
