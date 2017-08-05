/**
 * 创建模型
 */
var mongoose = require('mongoose');
var temperatureSchema = require('../schemas/staticEnvironments');
var temperature = mongoose.model('staticTemperature', temperatureSchema); //编译生成

module.exports = temperature;