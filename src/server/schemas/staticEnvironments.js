/**
 * 定义静止传感器的环境数据表
 */
var mongoose = require('mongoose');

var staticEvironmentSchema = new mongoose.Schema({
    //当天
    date: {
        unique: true,
        type: String,
    },
    datas: [{
        hour: {
            unique: false,
            type: String,
        },
        data: {
            unique: false,
            type: String
        }
    }]
});

module.exports = staticEvironmentSchema;