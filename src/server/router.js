import express from 'express'

const router = express.Router()

/* GET home page. */
//=读取views目录下的指定文件，解析返回给客户端
router.get('/', function(req, res, next) {
    /*
     *第一个参数：指定的模板文件：index.jade
     *第二个参数：传给模板的数据 
     */
    res.render('index', { title: '农业大数据', userInfo: req.userInfo })
})

// error handler
// will print stacktrace

export default router