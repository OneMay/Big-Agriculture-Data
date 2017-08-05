/**
 * 创建模型
 */
var mongoose = require('mongoose');
var pressureSchema = require('../schemas/staticEnvironments');
var pressure = mongoose.model('staticPressure', pressureSchema); //编译生成

module.exports = pressure;