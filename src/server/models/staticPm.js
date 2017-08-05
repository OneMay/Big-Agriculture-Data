/**
 * 创建模型
 */
var mongoose = require('mongoose');
var pmSchema = require('../schemas/staticEnvironments');
var pm = mongoose.model('staticPm', pmSchema); //编译生成

module.exports = pm;