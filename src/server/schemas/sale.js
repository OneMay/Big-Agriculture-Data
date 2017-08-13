/**
 * 定义静止传感器的环境数据表
 */
var mongoose = require('mongoose');

var sales = new mongoose.Schema({
    //当天
    year: {
        unique: true,
        type: String,
    },
    datas: [{
        month: {
            unique: false,
            type: String,
        },
        data: [{
            name: {
                unique: false,
                type: String
            },
            salesVolume: {
                unique: false,
                type: String
            }
        }]
    }]
});

module.exports = sales;