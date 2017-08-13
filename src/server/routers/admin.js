var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var StaticTemperature = require('../models/staticTemperature');
var StaticHumidity = require('../models/staticHumidity');
var StaticRainfall = require('../models/staticRainfall');
var StaticSoilhumidity = require('../models/staticSoilhumidity');
var StaticWindspeed = require('../models/staticWindspeed');
var StaticPm = require('../models/staticPm');
var StaticLight = require('../models/staticLight');
var StaticPressure = require('../models/staticPressure');
var Sale = require('../models/sale');
var fs = require('fs');
var path = require('path');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
//统一返回格式
var responseData;
var num = 0;
router.use(function(req, res, next) {
    responseData = {
        code: 0,
        message: ''
    }
    next();
})

//上传图片
router.post('/add/poster', multipartMiddleware, function(req, res, next) {
    var posterData = req.files.uploadPoster;
    var filePath = posterData.path || '';
    var originalFilename = posterData.originalFilename;
    if (originalFilename) {
        fs.readFile(filePath, function(err, data) {
            var timestamp = Date.now();
            //var type = posterData.type.split('/')[1];
            //var poster = timestamp + '.' + type;
            //var newPath = path.join(__dirname, '../../', 'static/upload/' + poster); //生成服务器的储存地址
            var newPath = path.join(__dirname, '../../', 'static/upload/' + originalFilename); //生成服务器的储存地址
            console.log(newPath);
            fs.writeFile(newPath, data, function(err) {
                //req.poster = originalFilename;
                if (err) {
                    responseData.code = 1;
                    responseData.message = '上传失败';
                    res.json(responseData);
                    return;
                } else {
                    responseData.code = 2;
                    responseData.message = '上传成功';
                    res.json(responseData);
                    return;
                }
                next();
            })
        })
    } else {
        responseData.code = 3;
        responseData.message = '上传失败，未选择文件';
        res.json(responseData);
        return;
    }
})
router.post('/add/product', function(req, res, next) {
        var name = req.body.name;
        var quality = req.body.quality;
        var technology = req.body.technology;
        var specifications = req.body.specifications;
        var packing = req.body.packing;
        var selenium = req.body.selenium;
        var describe = req.body.describe;
        var uploadPoster = req.body.uploadPoster;
        var poster = '/static/upload/' + uploadPoster;

        if (name == '' || quality == '' || technology == '' || specifications == '' || packing == '' || selenium == '' || describe == '') {
            responseData.code = 1;
            responseData.message = '输入字段不能为空！';
            res.json(responseData);
            return;
        } else {
            Product.findOne({
                name: name
            }).then(function(productInfo) {
                if (productInfo) {
                    //保存信息到数据库
                    var posterList = [];
                    productInfo.posters.forEach(function(val, index) {
                        posterList.push(val.poster);
                    })
                    if (posterList.indexOf(poster) < 0) {

                        var _id = productInfo._id;
                        num = 0;
                        Product.update({ _id: _id }, { $addToSet: { "posters": { poster: poster } } }, function(err) {
                            if (err) {
                                console.log('add err');
                            } else {
                                console.log('add success');
                            }
                        })
                        Product.findOne({
                            name: name
                        }).then(function(productInfo) {
                            if (productInfo) {
                                num = 0;
                                var _id = productInfo._id;
                                productInfo.name = req.body.name;
                                productInfo.quality = req.body.quality;
                                productInfo.technology = req.body.technology;
                                productInfo.specifications = req.body.specifications;
                                productInfo.packing = req.body.packing;
                                productInfo.selenium = req.body.selenium;
                                productInfo.describe = req.body.describe;

                                delete productInfo._id;
                                // }
                                return Product.update({ _id: _id }, productInfo, function(err) {});
                            }
                        })
                    } else {
                        num = 0;
                        var _id = productInfo._id;
                        productInfo.name = req.body.name;
                        productInfo.quality = req.body.quality;
                        productInfo.technology = req.body.technology;
                        productInfo.specifications = req.body.specifications;
                        productInfo.packing = req.body.packing;
                        productInfo.selenium = req.body.selenium;
                        productInfo.describe = req.body.describe;
                        delete productInfo._id;
                        return Product.update({ _id: _id }, productInfo, function(err) {});
                    }


                } else {
                    console.log(name);
                    num = 1;
                    //console.log(222);
                    var product = new Product({
                        name: req.body.name,
                        quality: req.body.quality,
                        technology: req.body.technology,
                        specifications: req.body.specifications,
                        packing: req.body.packing,
                        selenium: req.body.selenium,
                        describe: req.body.describe,
                        posters: [{
                            poster: poster
                        }]
                    });
                    return product.save();
                }
            }).then(function(productInfo) {
                if (num == 0) {
                    responseData.message = '数据更新成功';
                    res.json(responseData);
                }
                if (num == 1) {
                    responseData.message = '数据增加成功';
                    res.json(responseData);
                }
            })
        }
    })
    //产品列表
    /**
     * 通过limit(Number)限制每次取到的数据条数，
     * skip():忽略数据的条数
     * 每页显示2条
     * 1:1-2,skip:0->(当前页-1)*limit
     * 2:3-4,skip:2
     * 实现分页
     */
router.get('/find/productList', function(req, res, next) {
    var page = parseInt(req.query.page) || 1;
    var limit = 6;
    var currentPage = 0;
    // var count = 6;
    // var index = page * count;
    Product.count().then(function(count) {
        //计算总页数
        currentPage = Math.ceil(count / limit);
        //取值不能超过currentPage
        page = Math.min(page, currentPage)
            //取值不能小于1；
        page = Math.max(page, 1);
        var skip = (page - 1) * limit;
        Product.find().limit(limit).skip(skip).then(function(productList) {
            //console.log(productList);
            //var results = productList.slice(index,index + count);
            responseData.message = '查询成功';
            var productList1 = {
                    productList,
                    currentPage: currentPage,
                    page: page,
                    count: count,
                    limit: limit
                }
                //responseData.productList = productList;
            Object.assign(responseData, productList1);
            res.json(responseData);
        })
    })

})

//删除产品
router.post('/delete/product', function(req, res, next) {
        var name = req.body.name;
        //console.log(name);
        Product.findOne({
            name: name
        }).then(function(product) {
            if (product) {
                responseData.message = '删除成功';
                Product.remove({ name: name }, function(err) {})
                res.json(responseData);
                return;
            }
        })
    })
    //增加静止温度数据
router.post('/add/staticTemperature', function(req, res, next) {
    var date = req.body.date;
    //console.log(date);
    var hour = req.body.hour;
    var data = req.body.data;
    var num = 0;
    if (date == '' || hour == '') {
        responseData.code = 2;
        responseData.message = '输入数据不能为空';
        res.json(responseData);
        return;
    } else {
        StaticTemperature.findOne({
            date: date
        }).then(function(staticTemperatureInfo) {
            if (staticTemperatureInfo) {

                // if(staticTemperatureInfo.datas){
                for (var i = 0; i < staticTemperatureInfo.datas.length; i++) {
                    //如果找到了
                    if (staticTemperatureInfo.datas[i].hour == hour) {
                        //将read修改为1
                        staticTemperatureInfo.datas[i].data = data;
                        //混合类型因为没有特定约束，
                        //因此可以任意修改，一旦修改了原型，
                        //则必须调用markModified()
                        //传入read，表示该属性类型发生变化
                        staticTemperatureInfo.markModified('data');
                        //保存
                        num = 3;
                        return staticTemperatureInfo.save();
                    }
                }
                if (num != 3) {
                    var _id = staticTemperatureInfo._id;
                    num = 4;
                    return StaticTemperature.update({ _id: _id }, { $addToSet: { "datas": { hour: hour, data: data } } }, function(err) {
                        if (err) {
                            console.log('add err');
                        } else {
                            console.log('add success');
                        }
                    })
                }
                // }
            } else {
                var staticTemperature = new StaticTemperature({
                    date: date,
                    datas: [{
                        hour: hour,
                        data: data
                    }]
                });
                num = 5;
                return staticTemperature.save();
            }
        }).then(function(staticTemperatureInfo) {
            if (num == 3) {
                responseData.code = 3;
                responseData.message = '数据更新成功';
                res.json(responseData);
                return;
            }
            if (num == 4) {
                responseData.code = 4;
                responseData.message = '数据增加成功';
                res.json(responseData);
                return;
            }
            if (num == 5) {
                responseData.code = 5;
                responseData.message = '数据新建成功';
                res.json(responseData);
                return;
            }
        })
    }
})

//增加静止湿度数据
router.post('/add/staticHumidity', function(req, res, next) {
    var date = req.body.date;
    //console.log(date);
    var hour = req.body.hour;
    var data = req.body.data;
    var num = 0;
    if (date == '' || hour == '') {
        responseData.code = 2;
        responseData.message = '输入数据不能为空';
        res.json(responseData);
        return;
    } else {
        StaticHumidity.findOne({
            date: date
        }).then(function(staticHumidityInfo) {
            if (staticHumidityInfo) {

                // if(staticTemperatureInfo.datas){
                for (var i = 0; i < staticHumidityInfo.datas.length; i++) {
                    //如果找到了
                    if (staticHumidityInfo.datas[i].hour == hour) {
                        //将read修改为1
                        staticHumidityInfo.datas[i].data = data;
                        //混合类型因为没有特定约束，
                        //因此可以任意修改，一旦修改了原型，
                        //则必须调用markModified()
                        //传入read，表示该属性类型发生变化
                        staticHumidityInfo.markModified('data');
                        //保存
                        num = 3;
                        return staticHumidityInfo.save();
                    }
                }
                if (num != 3) {
                    var _id = staticHumidityInfo._id;
                    num = 4;
                    return StaticHumidity.update({ _id: _id }, { $addToSet: { "datas": { hour: hour, data: data } } }, function(err) {
                        if (err) {
                            console.log('add err');
                        } else {
                            console.log('add success');
                        }
                    })
                }
                // }
            } else {
                var staticHumidity = new StaticHumidity({
                    date: date,
                    datas: [{
                        hour: hour,
                        data: data
                    }]
                });
                num = 5;
                return staticHumidity.save();
            }
        }).then(function(staticHumidityInfo) {
            if (num == 3) {
                responseData.code = 3;
                responseData.message = '数据更新成功';
                res.json(responseData);
                return;
            }
            if (num == 4) {
                responseData.code = 4;
                responseData.message = '数据增加成功';
                res.json(responseData);
                return;
            }
            if (num == 5) {
                responseData.code = 5;
                responseData.message = '数据新建成功';
                res.json(responseData);
                return;
            }
        })
    }
})

//增加静止降雨量数据
router.post('/add/staticRainfall', function(req, res, next) {
    var date = req.body.date;
    //console.log(date);
    var hour = req.body.hour;
    var data = req.body.data;
    var num = 0;
    if (date == '' || hour == '') {
        responseData.code = 2;
        responseData.message = '输入数据不能为空';
        res.json(responseData);
        return;
    } else {
        StaticRainfall.findOne({
            date: date
        }).then(function(staticRainfallInfo) {
            if (staticRainfallInfo) {

                // if(staticTemperatureInfo.datas){
                for (var i = 0; i < staticRainfallInfo.datas.length; i++) {
                    //如果找到了
                    if (staticRainfallInfo.datas[i].hour == hour) {
                        //将read修改为1
                        staticRainfallInfo.datas[i].data = data;
                        //混合类型因为没有特定约束，
                        //因此可以任意修改，一旦修改了原型，
                        //则必须调用markModified()
                        //传入read，表示该属性类型发生变化
                        staticRainfallInfo.markModified('data');
                        //保存
                        num = 3;
                        return staticRainfallInfo.save();
                    }
                }
                if (num != 3) {
                    var _id = staticRainfallInfo._id;
                    num = 4;
                    return StaticRainfall.update({ _id: _id }, { $addToSet: { "datas": { hour: hour, data: data } } }, function(err) {
                        if (err) {
                            console.log('add err');
                        } else {
                            console.log('add success');
                        }
                    })
                }
                // }
            } else {
                var staticRainfall = new StaticRainfall({
                    date: date,
                    datas: [{
                        hour: hour,
                        data: data
                    }]
                });
                num = 5;
                return staticRainfall.save();
            }
        }).then(function(staticRainfallInfo) {
            if (num == 3) {
                responseData.code = 3;
                responseData.message = '数据更新成功';
                res.json(responseData);
                return;
            }
            if (num == 4) {
                responseData.code = 4;
                responseData.message = '数据增加成功';
                res.json(responseData);
                return;
            }
            if (num == 5) {
                responseData.code = 5;
                responseData.message = '数据新建成功';
                res.json(responseData);
                return;
            }
        })
    }
})

//增加静止土壤湿度数据
router.post('/add/staticSoilhumidity', function(req, res, next) {
    var date = req.body.date;
    //console.log(date);
    var hour = req.body.hour;
    var data = req.body.data;
    var num = 0;
    if (date == '' || hour == '') {
        responseData.code = 2;
        responseData.message = '输入数据不能为空';
        res.json(responseData);
        return;
    } else {
        StaticSoilhumidity.findOne({
            date: date
        }).then(function(staticSoilhumidityInfo) {
            if (staticSoilhumidityInfo) {

                // if(staticTemperatureInfo.datas){
                for (var i = 0; i < staticSoilhumidityInfo.datas.length; i++) {
                    //如果找到了
                    if (staticSoilhumidityInfo.datas[i].hour == hour) {
                        //将read修改为1
                        staticSoilhumidityInfo.datas[i].data = data;
                        //混合类型因为没有特定约束，
                        //因此可以任意修改，一旦修改了原型，
                        //则必须调用markModified()
                        //传入read，表示该属性类型发生变化
                        staticSoilhumidityInfo.markModified('data');
                        //保存
                        num = 3;
                        return staticSoilhumidityInfo.save();
                    }
                }
                if (num != 3) {
                    var _id = staticSoilhumidityInfo._id;
                    num = 4;
                    return StaticSoilhumidity.update({ _id: _id }, { $addToSet: { "datas": { hour: hour, data: data } } }, function(err) {
                        if (err) {
                            console.log('add err');
                        } else {
                            console.log('add success');
                        }
                    })
                }
                // }
            } else {
                var staticSoilhumidity = new StaticSoilhumidity({
                    date: date,
                    datas: [{
                        hour: hour,
                        data: data
                    }]
                });
                num = 5;
                return staticSoilhumidity.save();
            }
        }).then(function(staticSoilhumidityInfo) {
            if (num == 3) {
                responseData.code = 3;
                responseData.message = '数据更新成功';
                res.json(responseData);
                return;
            }
            if (num == 4) {
                responseData.code = 4;
                responseData.message = '数据增加成功';
                res.json(responseData);
                return;
            }
            if (num == 5) {
                responseData.code = 5;
                responseData.message = '数据新建成功';
                res.json(responseData);
                return;
            }
        })
    }
})

//增加静止风速风向数据
router.post('/add/staticWindspeed', function(req, res, next) {
    var date = req.body.date;
    //console.log(date);
    var hour = req.body.hour;
    var data = req.body.data;
    var num = 0;
    if (date == '' || hour == '') {
        responseData.code = 2;
        responseData.message = '输入数据不能为空';
        res.json(responseData);
        return;
    } else {
        StaticWindspeed.findOne({
            date: date
        }).then(function(staticWindspeedInfo) {
            if (staticWindspeedInfo) {

                // if(staticTemperatureInfo.datas){
                for (var i = 0; i < staticWindspeedInfo.datas.length; i++) {
                    //如果找到了
                    if (staticWindspeedInfo.datas[i].hour == hour) {
                        //将read修改为1
                        staticWindspeedInfo.datas[i].data = data;
                        //混合类型因为没有特定约束，
                        //因此可以任意修改，一旦修改了原型，
                        //则必须调用markModified()
                        //传入read，表示该属性类型发生变化
                        staticWindspeedInfo.markModified('data');
                        //保存
                        num = 3;
                        return staticWindspeedInfo.save();
                    }
                }
                if (num != 3) {
                    var _id = staticWindspeedInfo._id;
                    num = 4;
                    return StaticWindspeed.update({ _id: _id }, { $addToSet: { "datas": { hour: hour, data: data } } }, function(err) {
                        if (err) {
                            console.log('add err');
                        } else {
                            console.log('add success');
                        }
                    })
                }
                // }
            } else {
                var staticWindspeed = new StaticWindspeed({
                    date: date,
                    datas: [{
                        hour: hour,
                        data: data
                    }]
                });
                num = 5;
                return staticWindspeed.save();
            }
        }).then(function(staticWindspeedInfo) {
            if (num == 3) {
                responseData.code = 3;
                responseData.message = '数据更新成功';
                res.json(responseData);
                return;
            }
            if (num == 4) {
                responseData.code = 4;
                responseData.message = '数据增加成功';
                res.json(responseData);
                return;
            }
            if (num == 5) {
                responseData.code = 5;
                responseData.message = '数据新建成功';
                res.json(responseData);
                return;
            }
        })
    }
})

//增加静止pm2.5数据
router.post('/add/staticPm', function(req, res, next) {
    var date = req.body.date;
    //console.log(date);
    var hour = req.body.hour;
    var data = req.body.data;
    var num = 0;
    if (date == '' || hour == '') {
        responseData.code = 2;
        responseData.message = '输入数据不能为空';
        res.json(responseData);
        return;
    } else {
        StaticPm.findOne({
            date: date
        }).then(function(staticPmInfo) {
            if (staticPmInfo) {

                // if(staticTemperatureInfo.datas){
                for (var i = 0; i < staticPmInfo.datas.length; i++) {
                    //如果找到了
                    if (staticPmInfo.datas[i].hour == hour) {
                        //将read修改为1
                        staticPmInfo.datas[i].data = data;
                        //混合类型因为没有特定约束，
                        //因此可以任意修改，一旦修改了原型，
                        //则必须调用markModified()
                        //传入read，表示该属性类型发生变化
                        staticPmInfo.markModified('data');
                        //保存
                        num = 3;
                        return staticPmInfo.save();
                    }
                }
                if (num != 3) {
                    var _id = staticPmInfo._id;
                    num = 4;
                    return StaticPm.update({ _id: _id }, { $addToSet: { "datas": { hour: hour, data: data } } }, function(err) {
                        if (err) {
                            console.log('add err');
                        } else {
                            console.log('add success');
                        }
                    })
                }
                // }
            } else {
                var staticPm = new StaticPm({
                    date: date,
                    datas: [{
                        hour: hour,
                        data: data
                    }]
                });
                num = 5;
                return staticPm.save();
            }
        }).then(function(staticPmInfo) {
            if (num == 3) {
                responseData.code = 3;
                responseData.message = '数据更新成功';
                res.json(responseData);
                return;
            }
            if (num == 4) {
                responseData.code = 4;
                responseData.message = '数据增加成功';
                res.json(responseData);
                return;
            }
            if (num == 5) {
                responseData.code = 5;
                responseData.message = '数据新建成功';
                res.json(responseData);
                return;
            }
        })
    }
})

//增加静止光照强度数据
router.post('/add/staticLight', function(req, res, next) {
    var date = req.body.date;
    //console.log(date);
    var hour = req.body.hour;
    var data = req.body.data;
    var num = 0;
    if (date == '' || hour == '') {
        responseData.code = 2;
        responseData.message = '输入数据不能为空';
        res.json(responseData);
        return;
    } else {
        StaticLight.findOne({
            date: date
        }).then(function(staticLightInfo) {
            if (staticLightInfo) {

                // if(staticTemperatureInfo.datas){
                for (var i = 0; i < staticLightInfo.datas.length; i++) {
                    //如果找到了
                    if (staticLightInfo.datas[i].hour == hour) {
                        //将read修改为1
                        staticLightInfo.datas[i].data = data;
                        //混合类型因为没有特定约束，
                        //因此可以任意修改，一旦修改了原型，
                        //则必须调用markModified()
                        //传入read，表示该属性类型发生变化
                        staticLightInfo.markModified('data');
                        //保存
                        num = 3;
                        return staticLightInfo.save();
                    }
                }
                if (num != 3) {
                    var _id = staticLightInfo._id;
                    num = 4;
                    return StaticLight.update({ _id: _id }, { $addToSet: { "datas": { hour: hour, data: data } } }, function(err) {
                        if (err) {
                            console.log('add err');
                        } else {
                            console.log('add success');
                        }
                    })
                }
                // }
            } else {
                var staticLight = new StaticLight({
                    date: date,
                    datas: [{
                        hour: hour,
                        data: data
                    }]
                });
                num = 5;
                return staticLight.save();
            }
        }).then(function(staticLightInfo) {
            if (num == 3) {
                responseData.code = 3;
                responseData.message = '数据更新成功';
                res.json(responseData);
                return;
            }
            if (num == 4) {
                responseData.code = 4;
                responseData.message = '数据增加成功';
                res.json(responseData);
                return;
            }
            if (num == 5) {
                responseData.code = 5;
                responseData.message = '数据新建成功';
                res.json(responseData);
                return;
            }
        })
    }
})

//增加静止气压数据
router.post('/add/staticPressure', function(req, res, next) {
    var date = req.body.date;
    //console.log(date);
    var hour = req.body.hour;
    var data = req.body.data;
    var num = 0;
    if (date == '' || hour == '') {
        responseData.code = 2;
        responseData.message = '输入数据不能为空';
        res.json(responseData);
        return;
    } else {
        StaticPressure.findOne({
            date: date
        }).then(function(staticPressureInfo) {
            if (staticPressureInfo) {

                // if(staticTemperatureInfo.datas){
                for (var i = 0; i < staticPressureInfo.datas.length; i++) {
                    //如果找到了
                    if (staticPressureInfo.datas[i].hour == hour) {
                        //将read修改为1
                        staticPressureInfo.datas[i].data = data;
                        //混合类型因为没有特定约束，
                        //因此可以任意修改，一旦修改了原型，
                        //则必须调用markModified()
                        //传入read，表示该属性类型发生变化
                        staticPressureInfo.markModified('data');
                        //保存
                        num = 3;
                        return staticPressureInfo.save();
                    }
                }
                if (num != 3) {
                    var _id = staticPressureInfo._id;
                    num = 4;
                    return StaticPressure.update({ _id: _id }, { $addToSet: { "datas": { hour: hour, data: data } } }, function(err) {
                        if (err) {
                            console.log('add err');
                        } else {
                            console.log('add success');
                        }
                    })
                }
                // }
            } else {
                var staticPressure = new StaticPressure({
                    date: date,
                    datas: [{
                        hour: hour,
                        data: data
                    }]
                });
                num = 5;
                return staticPressure.save();
            }
        }).then(function(staticPressureInfo) {
            if (num == 3) {
                responseData.code = 3;
                responseData.message = '数据更新成功';
                res.json(responseData);
                return;
            }
            if (num == 4) {
                responseData.code = 4;
                responseData.message = '数据增加成功';
                res.json(responseData);
                return;
            }
            if (num == 5) {
                responseData.code = 5;
                responseData.message = '数据新建成功';
                res.json(responseData);
                return;
            }
        })
    }
})

//增加销售数据
router.post('/add/sale', function(req, res, next) {
    var year = req.body.year;
    var month = req.body.month;
    var name = req.body.name;
    var salesVolume = req.body.salesVolume;
    var num = 0;
    if (year == '' || month == '') {
        responseData.code = 2;
        responseData.message = '输入数据不能为空';
        res.json(responseData);
        return;
    } else {
        Sale.findOne({
            year: year
        }).then(function(saleInfo) {
            if (saleInfo) {
                var monthList = [];
                // if(staticTemperatureInfo.datas){
                for (var i = 0; i < saleInfo.datas.length; i++) {
                    monthList.push(saleInfo.datas[i].month);
                    for (var j = 0; j < saleInfo.datas[i].data.length; j++) {
                        //如果找到了
                        if (saleInfo.datas[i].month == month && saleInfo.datas[i].data[j].name == name) {
                            //将read修改为1
                            saleInfo.datas[i].data[j].salesVolume = salesVolume;
                            //混合类型因为没有特定约束，
                            //因此可以任意修改，一旦修改了原型，
                            //则必须调用markModified()
                            //传入read，表示该属性类型发生变化
                            saleInfo.markModified('salesVolume');
                            //保存
                            num = 3;
                            return saleInfo.save();
                        }
                    }
                }
                if (monthList.indexOf(month) < 0) {
                    var _id = saleInfo._id;
                    var send = 'datas';
                    num = 6;
                    return Sale.update({ _id: _id }, {
                        $addToSet: {
                            [send]: { month: month, 'data': { name: name, salesVolume: salesVolume } }
                        }
                    }, function(err) {
                        if (err) {
                            console.log('add err');
                        } else {
                            console.log('add success');
                        }
                    })
                }
                if (num != 3 && num != 6) {
                    for (var i = 0; i < saleInfo.datas.length; i++) {
                        for (var j = 0; j < saleInfo.datas[i].data.length; j++) {
                            //如果找到了
                            if (saleInfo.datas[i].month == month) {
                                num = 4;
                                var _id = saleInfo._id;
                                var send = 'datas.' + i + '.data';
                                return Sale.update({ _id: _id }, {
                                    $addToSet: {
                                        [send]: { name: name, salesVolume: salesVolume }
                                    }
                                }, function(err) {
                                    if (err) {
                                        console.log('add err');
                                    } else {
                                        console.log('add success');
                                    }
                                })
                            }
                        }
                    }

                }
                // }
            } else {
                var sale = new Sale({
                    year: year,
                    datas: [{
                        month: month,
                        data: [{
                            name: name,
                            salesVolume: salesVolume
                        }]
                    }]
                });
                num = 5;
                return sale.save();
            }
        }).then(function(saleInfo) {
            if (num == 3) {
                responseData.code = 3;
                responseData.message = '数据更新成功';
                res.json(responseData);
                return;
            }
            if (num == 4) {
                responseData.code = 4;
                responseData.message = '数据增加成功';
                res.json(responseData);
                return;
            }
            if (num == 5) {
                responseData.code = 5;
                responseData.message = '数据新建成功';
                res.json(responseData);
                return;
            }
            if (num == 6) {
                responseData.code = 6;
                responseData.message = '数据新建成功';
                res.json(responseData);
                return;
            }
        })
    }

})
module.exports = router;