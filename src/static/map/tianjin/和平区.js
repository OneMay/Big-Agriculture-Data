(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('和平区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "120101",
            "properties": { "name": "和平区", "cp": [117.195907, 39.118327], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@BhB`R@DA@CD@DCFCHBLDF@DABKFIJGQG@COEQM@@OASB"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [119992, 40041]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));