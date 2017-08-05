var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Product = require('../models/product')
var StaticTemperature = require('../models/staticTemperature');
//统一返回格式
var responseData;

router.use(function(req, res, next) {
    responseData = {
        code: 0,
        message: ''
    }
    next();
})

/**
 * 用户注册
 *  注册逻辑
 *  1.用户名不能为空
 *  2.密码不能为空
 *  3.用户是否已经被注册
 */
router.post('/user/register', function(req, res, next) {
        //console.log(req.body)
        var username = req.body.username;
        var password = req.body.password;
        //用户是否为空
        if (username == '') {
            responseData.code = 1;
            responseData.message = '用户名不能为空';
            res.json(responseData);
            return;
        }
        //密码不能为空
        if (password == '') {
            responseData.code = 2;
            responseData.message = '密码不能为空';
            res.json(responseData);
            return;
        }
        //用户是否已经被注册
        User.findOne({
            username: username
        }).then(function(userInfo) {
            //console.log(userInfo)
            if (userInfo) {
                //数据库有此用户，已经被注册
                responseData.code = 3;
                responseData.message = '用户名已经被注册了';
                res.json(responseData);
                return;
            } else {
                //保存用户信息到数据库
                var user = new User({
                    username: username,
                    password: password
                });
                return user.save();
            }
        }).then(function(newUserInfo) {
            // console.log(newUserInfo);
            responseData.message = '注册成功';
            res.json(responseData);
        })
    })
    //登录
router.post('/user/login', function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    //console.log(req.body);
    //用户是否为空
    if (username == '' || password == '') {
        responseData.code = 1;
        responseData.message = '用户名和密码不能为空';
        res.json(responseData);
        return;
    }
    //比较用户名和密码
    User.findOne({
        username: username,
        password: password
    }).then(function(userInfo) {
        if (!userInfo) {
            responseData.code = 2;
            responseData.message = '用户名或密码错误',
                res.json(responseData);
            return;
        } else {
            responseData.message = '登陆成功';
            var userInfoL = {
                    userInfo: {
                        _id: userInfo._id,
                        username: userInfo.username
                    }
                }
                // responseData.userInfo = {
                //     _id: userInfo._id,
                //     username: userInfo.username
                // }
            Object.assign(responseData, userInfoL);
            res.cookies.set('userInfo', JSON.stringify({
                _id: userInfo._id,
                username: userInfo.username
            }));
            res.json(responseData);
            return;
        }
    })
})

//退出
router.get('/user/logout', function(req, res) {
    if (req.headers.cookie) {
        responseData.message = "退出成功！";
        res.cookies.set('userInfo', null);
        res.json(responseData);

        return;
    } else {
        responseData.code = 4;
        responseData.message = "退出失败！";
        res.json(responseData);
        return;
    }

})

//查找单个产品
router.post('/get/product', function(req, res, next) {
    var name = req.body.name;
    //console.log(name);
    Product.findOne({
        name: name
    }).then(function(product) {
        if (product) {
            responseData.message = '查询成功';
            responseData.product = product;
            res.json(responseData);
            return;
        } else {
            responseData.code = 3;
            responseData.message = '数据库没有次产品的数据';
            res.json(responseData);
            return;
        }
    })
})

//获取静止温度数据
router.post('/find/staticTemperature', function(req, res, next) {
    var time = req.body.date;
    var temparature1 = [];
    time.forEach(function(val, index) {
        StaticTemperature.findOne({
            date: val
        }).then(function(staticTemperatureInfo) {
            if (staticTemperatureInfo) {
                if (time.length != 1) {
                    var sum = 0;
                    var dataArr = [];
                    for (var i = 0; i < staticTemperatureInfo.datas.length; i++) {
                        sum += parseInt(staticTemperatureInfo.datas[i].data);
                        dataArr.push(staticTemperatureInfo.datas[i].data);
                    }
                    var result = Math.round((sum / staticTemperatureInfo.datas.length));
                    temparature1.push({
                        date: staticTemperatureInfo.date,
                        MaxData: Math.max.apply(null, dataArr),
                        MinData: Math.min.apply(null, dataArr),
                        average: result
                    })
                } else {
                    temparature1.push({
                        staticTemperatureInfo
                    });
                }
            } else {
                responseData.code = 4;
                responseData.message = '暂无数据';
                res.json(responseData);
                return;
            }
        }).then(function(staticTemperatureInfo) {
            if (temparature1.length == time.length) {
                var temparature = {
                    temparatureInfo: temparature1
                }
                responseData.code = 3;
                responseData.message = '数据查询成功';
                Object.assign(responseData, temparature);
                res.json(responseData);
            }
        })
    });
})
module.exports = router;