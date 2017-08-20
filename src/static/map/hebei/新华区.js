(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('新华区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"130105","properties":{"name":"新华区","cp":[114.463377,38.05095],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@C@@@A@C@@@@@@@@@E@@@@@E@CBA@@@@@M@@@@@@@AF@B@B@@@BBNBDA@GDBDEAEB@EQDGB@@SD@@@@OB@@@@IBKBSB@@@@@B@DAB@@@@AN@@@@@B@@N@B@@@@@@@BB@D@@@B@@A@@B@B@P@@@@I@@@A@@@A@@B@B@B@@@BB@DB@@@@@BBBD@LBP@DABA@@FBD@BB@BB@DBRBB@@@@BBB@DAD@DK@A@@@ARDFD@BD@HBB@@BDBBDDH@BLB@DADD@BHJBDFHB@DFLJBBFCDCDE@AFCRKHELGF@JA@EPABAHB@@BBD@BAFEAK@ADA@@AA@@AA@@IGEE@@AAEEAAGEJ@@@AACA@@@@@CAE@@G@A@@A@@DEPAB@BBHDAE@@@I@A@@@@@C@A@@@AAQ@@@@AARAB@ACAA@@AGAC@@AE@@AIAIAG@@@C@@@@AIAKE@A@@@@@@@A@A@A@C@BB@BA@A@A@A@GA@BG@@@C@@@@@C@@D@B@@@@C@A@A@A@@@@@A@@@A@@@@@@@A@A@C@C@@@"],"encodeOffsets":[[117204,38962]]}}],"UTF8Encoding":true});}));