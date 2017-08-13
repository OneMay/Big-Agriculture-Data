/**
 * 创建模型
 */
var mongoose = require('mongoose');
var saleSchema = require('../schemas/sale');
var sale = mongoose.model('sale', saleSchema); //编译生成

module.exports = sale;