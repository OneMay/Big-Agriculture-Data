var mongoose = require('mongoose');

//表的结构
var ProductSchema = new mongoose.Schema({

    name: {
        unique: false,
        type: String
    },
    quality: {
        unique: false,
        type: String
    },
    technology: {
        unique: false,
        type: String
    },
    specifications: {
        unique: false,
        type: String
    },
    packing: {
        unique: false,
        type: String
    },
    selenium: {
        unique: false,
        type: String
    },
    describe: {
        unique: false,
        type: String
    }
});

module.exports = ProductSchema;