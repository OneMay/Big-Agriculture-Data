(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('西城区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "110102",
            "properties": { "name": "西城区", "cp": [116.366794, 39.915309], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@}EAB@HI@@DCBOAOBIC@NB@BLB@AFF@AB@LX@@DC@BJCBBHAF@VAbE@@BA@CDJDLABA@BDADBFBHADBAF@HHBBC@IJ@VHAhT@BJZ@@GGA@CCABCA@AMNB@aDABWD@BIE@@AI@BSA@@AB@AGH@@ODABueA"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [119174, 40829]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));