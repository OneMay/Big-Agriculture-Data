(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('河西区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "120103",
            "properties": { "name": "河西区", "cp": [117.217536, 39.101897], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@TAPB@@RNPF@DRHPSXSFQHEXKE@CMIFUQA@DC@CCA@CDE@CEE@FOc@@D{@ch]IGFCFE`A\\"]
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