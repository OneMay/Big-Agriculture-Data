/**
 * 创建模型
 */
var mongoose = require('mongoose');
var lightSchema = require('../schemas/staticEnvironments');
var light = mongoose.model('staticLight', lightSchema); //编译生成

module.exports = light;