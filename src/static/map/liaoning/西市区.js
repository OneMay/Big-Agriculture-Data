(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('西市区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"210803","properties":{"name":"西市区","cp":[122.206419,40.666213],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@C@@ACAC@@@A@@@AA@@@J@@@@O@G@@@@@KG@@ITBD@AFJB@AJA@WbMFJBLJLDJTPBBD@HAcmKQvWMOHI\\ajvhQ\\fKHX`nS@A[cuCEaoJ@JQCABEKCBQDMBI@W@}a]@AKEIGOB@@G@GTaXDBBDAJGDO@SDYCGHSbDJ\\JAJ³zKNIPKXAJ@DBLJHHNR^DL@HAHIJL\\CXBJDJHFHDF@F@@@HCLGTQ@ANLVQDBCBXCBCJAH@B@HCFIAA@CAA@A@@CEAA"],"encodeOffsets":[[125164,41651]]}}],"UTF8Encoding":true});}));