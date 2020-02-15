/**
 * Created by siroramirez on 24/05/17.
 */
var menuDB = require('../../db/menu-management/menu');

exports.createMenu = async menuData => {
    if (!menuData.item ||!menuData.size || !menuData.price ) {
        return;
    }
   
    return await menuDB.saveMenu(menuData)
};

exports.getAllMenu = async  menuData => {
    return await menuDB.getAllMenu()
};