/**
 * 创建模型
 */
var mongoose = require('mongoose');
var ProductSchema = require('../schemas/products');
var Product = mongoose.model('Product', ProductSchema); //编译生成

module.exports = Product;