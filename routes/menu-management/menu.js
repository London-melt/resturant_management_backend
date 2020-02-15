/**
 * Created by siroramirez on 23/05/17.
 */
var menuDomain = require('../../domain/menu-management//menu');

exports.createMenu = async (req, res, next) => {
    var menuData = req.body;

    try {
        var menu = await menuDomain.createMenu(menuData);
        res.send(menu);
    } catch (err) {
        res.status(400).send(err);
    }
}
exports.getAllMenu = async (req, res, next) => {

    try {
        var menu = await menuDomain.getAllMenu();
        res.send(menu);
    } catch (err) {
        res.status(400).send(err);
    }
}