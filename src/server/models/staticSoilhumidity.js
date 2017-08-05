/**
 * 创建模型
 */
var mongoose = require('mongoose');
var soilhumiditySchema = require('../schemas/staticEnvironments');
var soilhumidity = mongoose.model('staticSoilhumidity', soilhumiditySchema); //编译生成

module.exports = soilhumidity;