var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Product = require('../models/product')
var StaticTemperature = require('../models/staticTemperature');
var StaticHumidity = require('../models/staticHumidity');
var StaticRainfall = require('../models/staticRainfall');
var StaticSoilhumidity = require('../models/staticSoilhumidity');
var StaticWindspeed = require('../models/staticWindspeed');
var StaticPm = require('../models/staticPm');
var StaticLight = require('../models/staticLight');
var StaticPressure = require('../models/staticPressure');
var Sale = require('./../models/sale');
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

//获取静止湿度数据
router.post('/find/staticHumidity', function(req, res, next) {
    var time = req.body.date;
    var humidity1 = [];
    time.forEach(function(val, index) {
        StaticHumidity.findOne({
            date: val
        }).then(function(staticHumidityInfo) {
            if (staticHumidityInfo) {
                if (time.length != 1) {
                    var sum = 0;
                    var dataArr = [];
                    for (var i = 0; i < staticHumidityInfo.datas.length; i++) {
                        sum += parseInt(staticHumidityInfo.datas[i].data);
                        dataArr.push(staticHumidityInfo.datas[i].data);
                    }
                    var result = Math.round((sum / staticHumidityInfo.datas.length));
                    humidity1.push({
                        date: staticHumidityInfo.date,
                        MaxData: Math.max.apply(null, dataArr),
                        MinData: Math.min.apply(null, dataArr),
                        average: result
                    })
                } else {
                    humidity1.push({
                        staticHumidityInfo
                    });
                }
            } else {
                responseData.code = 4;
                responseData.message = '暂无数据';
                res.json(responseData);
                return;
            }
        }).then(function(staticHumidityInfo) {
            if (humidity1.length == time.length) {
                var humidity = {
                    humidityInfo: humidity1
                }
                responseData.code = 3;
                responseData.message = '数据查询成功';
                Object.assign(responseData, humidity);
                res.json(responseData);
            }
        })
    });
})

//获取静止降雨量数据
router.post('/find/staticRainfall', function(req, res, next) {
    var time = req.body.date;
    var rainfall1 = [];
    time.forEach(function(val, index) {
        StaticRainfall.findOne({
            date: val
        }).then(function(staticRainfallInfo) {
            if (staticRainfallInfo) {
                if (time.length != 1) {
                    var sum = 0;
                    var dataArr = [];
                    for (var i = 0; i < staticRainfallInfo.datas.length; i++) {
                        sum += parseInt(staticRainfallInfo.datas[i].data);
                        dataArr.push(staticRainfallInfo.datas[i].data);
                    }
                    var result = Math.round((sum / staticRainfallInfo.datas.length));
                    rainfall1.push({
                        date: staticRainfallInfo.date,
                        MaxData: Math.max.apply(null, dataArr),
                        MinData: Math.min.apply(null, dataArr),
                        average: result
                    })
                } else {
                    rainfall1.push({
                        staticRainfallInfo
                    });
                }
            } else {
                responseData.code = 4;
                responseData.message = '暂无数据';
                res.json(responseData);
                return;
            }
        }).then(function(staticRainfallInfo) {
            if (rainfall1.length == time.length) {
                var rainfall = {
                    rainfallInfo: rainfall1
                }
                responseData.code = 3;
                responseData.message = '数据查询成功';
                Object.assign(responseData, rainfall);
                res.json(responseData);
            }
        })
    });
})

//获取静止土壤湿度数据
router.post('/find/staticSoilhumidity', function(req, res, next) {
    var time = req.body.date;
    var soilhumidity1 = [];
    time.forEach(function(val, index) {
        StaticSoilhumidity.findOne({
            date: val
        }).then(function(staticSoilhumidityInfo) {
            if (staticSoilhumidityInfo) {
                if (time.length != 1) {
                    var sum = 0;
                    var dataArr = [];
                    for (var i = 0; i < staticSoilhumidityInfo.datas.length; i++) {
                        sum += parseInt(staticSoilhumidityInfo.datas[i].data);
                        dataArr.push(staticSoilhumidityInfo.datas[i].data);
                    }
                    var result = Math.round((sum / staticSoilhumidityInfo.datas.length));
                    soilhumidity1.push({
                        date: staticSoilhumidityInfo.date,
                        MaxData: Math.max.apply(null, dataArr),
                        MinData: Math.min.apply(null, dataArr),
                        average: result
                    })
                } else {
                    soilhumidity1.push({
                        staticSoilhumidityInfo
                    });
                }
            } else {
                responseData.code = 4;
                responseData.message = '暂无数据';
                res.json(responseData);
                return;
            }
        }).then(function(staticSoilhumidityInfo) {
            if (soilhumidity1.length == time.length) {
                var soilhumidity = {
                    soilhumidityInfo: soilhumidity1
                }
                responseData.code = 3;
                responseData.message = '数据查询成功';
                Object.assign(responseData, soilhumidity);
                res.json(responseData);
            }
        })
    });
})

//获取静止风速风向数据
router.post('/find/staticWindspeed', function(req, res, next) {
    var time = req.body.date;
    var Windspeed1 = [];
    time.forEach(function(val, index) {
        StaticWindspeed.findOne({
            date: val
        }).then(function(staticWindspeedInfo) {
            if (staticWindspeedInfo) {
                if (time.length != 1) {
                    var sum = 0;
                    var dataArr = [];
                    for (var i = 0; i < staticWindspeedInfo.datas.length; i++) {
                        sum += parseInt(staticWindspeedInfo.datas[i].data);
                        dataArr.push(staticWindspeedInfo.datas[i].data);
                    }
                    var result = Math.round((sum / staticWindspeedInfo.datas.length));
                    Windspeed1.push({
                        date: staticWindspeedInfo.date,
                        MaxData: Math.max.apply(null, dataArr),
                        MinData: Math.min.apply(null, dataArr),
                        average: result
                    })
                } else {
                    Windspeed1.push({
                        staticWindspeedInfo
                    });
                }
            } else {
                responseData.code = 4;
                responseData.message = '暂无数据';
                res.json(responseData);
                return;
            }
        }).then(function(staticWindspeedInfo) {
            if (Windspeed1.length == time.length) {
                var Windspeed = {
                    WindspeedInfo: Windspeed1
                }
                responseData.code = 3;
                responseData.message = '数据查询成功';
                Object.assign(responseData, Windspeed);
                res.json(responseData);
            }
        })
    });
})

//获取静止pm2.5数据
router.post('/find/staticPm', function(req, res, next) {
    var time = req.body.date;
    var pm1 = [];
    time.forEach(function(val, index) {
        StaticPm.findOne({
            date: val
        }).then(function(staticPmInfo) {
            if (staticPmInfo) {
                if (time.length != 1) {
                    var sum = 0;
                    var dataArr = [];
                    for (var i = 0; i < staticPmInfo.datas.length; i++) {
                        sum += parseInt(staticPmInfo.datas[i].data);
                        dataArr.push(staticPmInfo.datas[i].data);
                    }
                    var result = Math.round((sum / staticPmInfo.datas.length));
                    pm1.push({
                        date: staticPmInfo.date,
                        MaxData: Math.max.apply(null, dataArr),
                        MinData: Math.min.apply(null, dataArr),
                        average: result
                    })
                } else {
                    pm1.push({
                        staticPmInfo
                    });
                }
            } else {
                responseData.code = 4;
                responseData.message = '暂无数据';
                res.json(responseData);
                return;
            }
        }).then(function(staticPmInfo) {
            if (pm1.length == time.length) {
                var pm = {
                    pmInfo: pm1
                }
                responseData.code = 3;
                responseData.message = '数据查询成功';
                Object.assign(responseData, pm);
                res.json(responseData);
            }
        })
    });
})

//获取静止光照强度数据
router.post('/find/staticLight', function(req, res, next) {
    var time = req.body.date;
    var light1 = [];
    time.forEach(function(val, index) {
        StaticLight.findOne({
            date: val
        }).then(function(staticLightInfo) {
            if (staticLightInfo) {
                if (time.length != 1) {
                    var sum = 0;
                    var dataArr = [];
                    for (var i = 0; i < staticLightInfo.datas.length; i++) {
                        sum += parseInt(staticLightInfo.datas[i].data);
                        dataArr.push(staticLightInfo.datas[i].data);
                    }
                    var result = Math.round((sum / staticLightInfo.datas.length));
                    light1.push({
                        date: staticLightInfo.date,
                        MaxData: Math.max.apply(null, dataArr),
                        MinData: Math.min.apply(null, dataArr),
                        average: result
                    })
                } else {
                    light1.push({
                        staticLightInfo
                    });
                }
            } else {
                responseData.code = 4;
                responseData.message = '暂无数据';
                res.json(responseData);
                return;
            }
        }).then(function(staticLightInfo) {
            if (light1.length == time.length) {
                var light = {
                    lightInfo: light1
                }
                responseData.code = 3;
                responseData.message = '数据查询成功';
                Object.assign(responseData, light);
                res.json(responseData);
            }
        })
    });
})

//获取静止气压数据
router.post('/find/staticPressure', function(req, res, next) {
    var time = req.body.date;
    var pressure1 = [];
    time.forEach(function(val, index) {
        StaticPressure.findOne({
            date: val
        }).then(function(staticPressureInfo) {
            if (staticPressureInfo) {
                if (time.length != 1) {
                    var sum = 0;
                    var dataArr = [];
                    for (var i = 0; i < staticPressureInfo.datas.length; i++) {
                        sum += parseInt(staticPressureInfo.datas[i].data);
                        dataArr.push(staticPressureInfo.datas[i].data);
                    }
                    var result = Math.round((sum / staticPressureInfo.datas.length));
                    pressure1.push({
                        date: staticPressureInfo.date,
                        MaxData: Math.max.apply(null, dataArr),
                        MinData: Math.min.apply(null, dataArr),
                        average: result
                    })
                } else {
                    pressure1.push({
                        staticPressureInfo
                    });
                }
            } else {
                responseData.code = 4;
                responseData.message = '暂无数据';
                res.json(responseData);
                return;
            }
        }).then(function(staticPressureInfo) {
            if (pressure1.length == time.length) {
                var pressure = {
                    pressureInfo: pressure1
                }
                responseData.code = 3;
                responseData.message = '数据查询成功';
                Object.assign(responseData, pressure);
                res.json(responseData);
            }
        })
    });
})

//获取不同种类的茶叶销售数据
router.post('/find/teaCategory', function(req, res, next) {
    var year = req.body.year;
    var monthList = req.body.monthList;
    var index = monthList.length - 1;
    var sale1 = [];
    var trued = true;
    Sale.findOne({
        year: year
    }).then(function(saleInfo) {
        if (saleInfo) {
            if (saleInfo.datas.length >= 6 && monthList[index] <= 6) {
                var saleData = saleInfo.datas.slice(0, 6);
                saleData.forEach(function(val, ind) {
                    sale1.push({
                        month: val.month,
                        data: val.data
                    })
                })
            }
            if (saleInfo.datas.length > 6 && monthList[index] > 6) {
                var saleData = saleInfo.datas.slice(6, saleInfo.datas.length);
                saleData.forEach(function(val, ind) {
                    sale1.push({
                        month: val.month,
                        data: val.data
                    })
                })
            }
            if (saleInfo.datas.length <= 6 && monthList[index] > 6) {
                responseData.code = 4;
                trued = false;
                responseData.message = '暂无数据';
                res.json(responseData);
                return;
            }
            if (saleInfo.datas.length <= 6 && monthList[index] <= 6) {
                var saleData = saleInfo.datas.slice(0, saleInfo.datas.length);
                saleData.forEach(function(val, ind) {
                    sale1.push({
                        month: val.month,
                        data: val.data
                    })
                })
            }
        } else {
            responseData.code = 4;
            responseData.message = '暂无数据';
            res.json(responseData);
            trued = false;
            return;
        }
    }).then(function(saleInfo) {
        if (trued) {
            var sale = {
                saleInfo: sale1
            }
            responseData.code = 3;
            responseData.message = '数据查询成功';
            Object.assign(responseData, sale);
            res.json(responseData);
        }
    })
})

//获取产品图片数据
router.post('/get/poster', function(req, res, next) {
    var name = req.body.name;
    var poster1 = [];
    var poster2 = [];
    //console.log(name)
    var num = 0;
    Product.findOne({
        name: name
    }).then(function(productInfo) {
        if (productInfo) {
            num = 3;
            productInfo.posters.forEach(function(val, index) {
                poster1.push({ imgUrl: val.poster });
            })
            if (poster1.length > 4) {
                poster2 = poster1.slice(poster1.length - 4, poster1.length);
            } else {
                poster2 = poster1;
            }
            //console.log(poster2)
        } else {
            responseData.code = 4;
            responseData.message = '暂无数据';
            res.json(responseData);
            return;
        }
    }).then(function(productInfo) {
        if (num == 3) {
            var posters = {
                postersInfo: poster2
            }
            responseData.code = 3;
            responseData.message = '数据查询成功';
            Object.assign(responseData, posters);
            res.json(responseData);
        }
    })
})
module.exports = router;