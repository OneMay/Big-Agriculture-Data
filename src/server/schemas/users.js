/**
 * 定义用户结构
 */

var mongoose = require('mongoose');
//用户表的结构
var UserSchema = new mongoose.Schema({
    //用户名
    username: {
        unique: true,
        type: String
    },
    password: String,
    adminCode: {
        type: Number,
        default: 10
    }
});

module.exports = UserSchema;