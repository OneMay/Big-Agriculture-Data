(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('河东区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "120102",
            "properties": { "name": "河东区", "cp": [117.226568, 39.122125], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@XFFIE@BGGA@KVBN_]CCCLgMGE@CD@AGB@AEGMEACB@BA@BFWFACKA@DA@@DA@C@CCCDGIAKMBWLGFERWT]bADCNE@DDIDEFBHTHBD@DLMPJj@ARX@"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [120075, 40099]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));