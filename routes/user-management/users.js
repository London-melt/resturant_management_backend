/**
 * Created by siroramirez on 23/05/17.
 */
var usersDomain = require('../../domain/user-management/users');

exports.createUser = async (req, res, next) => {
    var userData = req.body;

    try {
        var user = await usersDomain.createUser(userData);
        res.send(user);
    } catch (err) {
        res.status(400).send(err);
    }
}
exports.getAllUser = async (req, res, next) => {

    try {
        var user = await usersDomain.getAllUser();
        res.send(user);
    } catch (err) {
        res.status(400).send(err);
    }
}