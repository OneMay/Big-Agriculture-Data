let fs = require('fs');
let join = require('path').join;
/**
 * 
 * param startPath  起始目录文件夹路径
 * returns {Array}
 */
function findSync(startPath) {
    let result = [];

    function finder(path) {
        let files = fs.readdirSync(path);
        files.forEach((val, index) => {
            let fPath = join(path, val);
            let stats = fs.statSync(fPath);
            if (stats.isDirectory()) finder(fPath);
            if (stats.isFile()) result.push(fPath);
        });

    }
    finder(startPath);
    //console.log(result);
    return result;
}
let fileNames = findSync('./../../map/');
console.log(fileNames);
fs.unlink('index.js', function(err) {
    if (err) {
        throw err;
    }
    console.log('文件:' + 'indexjs' + '删除成功！');
})
fileNames.forEach(function(val, index) {
    var str = val.replace(/\\/g, "\/");
    fs.appendFileSync('index.js', 'import "./' + str + '"\n', 'utf8')
})