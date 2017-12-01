(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('徐汇区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "310104",
            "properties": { "name": "徐汇区", "cp": [121.43752, 31.179973], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@CEAMMAA@C@AFA@@BC@ABC@@BD@@BH@@BB@EHDDCBECADGEEAEBFNET]CMRELQjOEGRFBAHDBAHH@@B@BDA`H@F@BC@AB@FD@DD@@@CH@DDAFDD^LEPF@DFTDPHHQBOJBDOBKHADCOGCEAE@EFOBMAEUW@GBEHILMBE@KGM"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [124381, 31859]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));