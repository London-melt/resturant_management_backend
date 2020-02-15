/**
 * Created by siroramirez on 23/05/17.
 */
var users = require('./user-management/users');
var menu = require('./menu-management/menu');

var graphQL = require('./graphQL');

exports.assignRoutes = function (app) {
    app.post('/users', users.createUser);
    app.get('/users',users.getAllUser);

    app.post('/menu',menu.createMenu);
    app.get('/menu',menu.getAllMenu);

    app.post('/graphQL', graphQL.getQuery);
}