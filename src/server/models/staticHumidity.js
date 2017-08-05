/**
 * 创建模型
 */
var mongoose = require('mongoose');
var humiditySchema = require('../schemas/staticEnvironments');
var humidity = mongoose.model('staticHumidity', humiditySchema); //编译生成

module.exports = humidity;