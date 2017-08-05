/**
 * 创建模型
 */
var mongoose = require('mongoose');
var rainfallSchema = require('../schemas/staticEnvironments');
var rainfall = mongoose.model('staticRainfall', rainfallSchema); //编译生成

module.exports = rainfall;