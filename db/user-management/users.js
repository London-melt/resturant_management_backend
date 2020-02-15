/**
 * Created by siroramirez on 23/05/17.
 */

var db_tools = require('../../tools/db_tools');
var mongoose = require('mongoose');

// database connect
var db = db_tools.DBConnectMongoose()
    .catch(err => console.log(err));

// Create a Mongoose schema
var UserSchema = new mongoose.Schema({
    username: String,
    firstname: String,
    lastname: String,
    phNumber: String,
    address:String,
    isAdmin:Boolean
});

// Register the schema
var User = mongoose.model('user', UserSchema);

exports.User = User;

exports.saveUser = async userData => await new User(userData).save();
exports.getUsersByIds = async userIds => await User.find({_id : {$in: userIds}});
exports.getAllUser = async userIds => await User.find();