import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import router from './router'
import config from '../../webpack.config'
import mongoose from 'mongoose'
import cookies from 'cookies'
var User = require('./models/user');
var morgan = require('morgan');
var mongodbUrl = 'mongodb://localhost:1200/bigdata';
var port = process.env.PORT || 8080; //环境变量
const app = express()

// 配置应用模板
//定义当前应用所使用的模板引擎
//第一个参数必须是views,第二个参数是目录
app.set('views', path.join(__dirname, 'views/pages'));
//第一个参数必须是‘viewengine’,第二个参数：模板引擎的名称，同时也是模板文件的后缀
app.set('view engine', 'jade');
//jade.setDefaults({cache:false});
// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
    //bodyParser用来处理post数据
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
    //设置cookies
    //app.use(cookieParser())
app.use(function(req, res, next) {
    res.setHeader('cache-control', 'no-cache');
    res.cookies = new cookies(req, res);
    req.userInfo = {};
    //console.log(req.headers.cookie)
    //解析用户登陆的cookie信息
    if (req.headers.cookie) {
        try {
            var reg = /(userInfo=)(.+)/g
            var user = reg.exec(req.headers.cookie)[2]
            req.userInfo = JSON.parse(user);

            // User.findById(req.userInfo._id).then(function(userInfo) {
            //     req.userInfo.adminCode = Number(userInfo.adminCode);
            //     console.log(req.userInfo);
            //     next();
            // })
        } catch (e) {
            return next();
        }
    }
    return next();
})
app.use(express.static(path.join(__dirname, '../../src/')))

const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: { colors: true }
}))

app.use(webpackHotMiddleware(compiler))
    /* 
     *根据不同的功能划分模块
     */
app.use('/', router)
app.use('/admin', require('./routers/admin'));
app.use('/api', require('./routers/api'));
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found')
    err.status = 404
    next(err)
})

// error handler
// will print stacktrace
app.use(function(err, req, res, next) {
    res.status(err.status || 500)
    res.render('error', {
        message: err.message,
        error: err
    })
})
if ('development' === app.get('env')) {
    app.set('showStackError', true);
    app.use(morgan(':method:url:status'));
    app.locals.pretty = true; //代码格式化
    mongoose.set('debug', true);
}

//连接数据库
mongoose.connect(mongodbUrl, function(err) {
    if (err) {
        console.log('数据库连接失败');
    } else {
        console.log('数据库连接成功');
        app.listen(port)
    }
});
console.log('started on port ' + port);
export default app