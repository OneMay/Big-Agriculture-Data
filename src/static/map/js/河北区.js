(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('河北区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "120105",
            "properties": { "name": "河北区", "cp": [117.201569, 39.156632], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@FBBAJBFDJK\\NFEFBLKBBBATP`]QOLB@AHBBEJ@DDDE@QW@BQi@OIKN@CACQECG@CFCJCCCMCGAEDCFBT@DSTQN@BFDBDCJBJAHKAIFDDXDAB"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [119993, 40130]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));