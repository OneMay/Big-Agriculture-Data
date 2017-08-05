/**
 * 创建模型
 */
var mongoose = require('mongoose');
var UserSchema = require('../schemas/users');
var User = mongoose.model('User', UserSchema); //编译生成

module.exports = User;