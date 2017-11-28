(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('虹口区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "310109",
            "properties": { "name": "虹口区", "cp": [121.491832, 31.26097], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@@OHWVFBABIKK@MJCJGBKV[C@@I[AOEODCACCCLADDBCFBD@FURQT@J@F@HABDFDLAPH@BTVCLBBE"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [124402, 32064]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));