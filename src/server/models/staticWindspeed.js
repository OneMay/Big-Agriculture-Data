/**
 * 创建模型
 */
var mongoose = require('mongoose');
var windspeedSchema = require('../schemas/staticEnvironments');
var windspeed = mongoose.model('staticWindspeed', windspeedSchema); //编译生成

module.exports = windspeed;