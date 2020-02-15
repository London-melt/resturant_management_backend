/**
 * Created by siroramirez on 24/05/17.
 */
var usersDB = require('../../db/user-management/users');

exports.createUser = async userData => {
    if (!userData.username ||!userData.firstname || !userData.lastname || !userData.phNumber || !userData.phNumber || !userData.address ) {
        return;
    }
    userData.completename = userData.surname + userData.lastname;

    return await usersDB.saveUser(userData)
};

exports.getAllUser = async userData => {
    return await usersDB.getAllUser()
};