/**
 * Created by siroramirez on 23/05/17.
 */

var db_tools = require('../../tools/db_tools');
var mongoose = require('mongoose');

// database connect
var db = db_tools.DBConnectMongoose()
    .catch(err => console.log(err));

// Create a Mongoose schema
var MenuSchema = new mongoose.Schema({
    item: String,
    size:Number,
    price:Number,
    available:Boolean
});

// Register the schema
var Menu = mongoose.model('menu', MenuSchema);

exports.Menu = Menu;

exports.saveMenu = async menuData => await new Menu(menuData).save();
exports.getAllMenu = async userIds => await Menu.find();