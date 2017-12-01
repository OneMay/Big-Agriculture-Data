(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('黄浦区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "310101",
            "properties": { "name": "黄浦区", "cp": [121.490317, 31.222771], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@AHV@BDCPEPLENFHCJHFBNCAGBGXWFIBGCGMUKKCCcGCDGBALCPIAAPGR"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [124373, 31970]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));