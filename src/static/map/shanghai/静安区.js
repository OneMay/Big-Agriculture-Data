(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('静安区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "310106",
            "properties": { "name": "静安区", "cp": [121.448224, 31.229003], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@AB@PCJBNG@ABBDBB@DNBAJJ@@FB@@H@@@DF@ENB@BDD@BAT@BENDFDPB@AF@A]G@BOCKCEBA@G@KBEDCLMVQ@EACDECABCDKECGDMEKFFODOACU@BGOGUCELAJABIECBBNFHJBTLHB@BADDD@FB@@DC@BHOVUJCFIG"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [124340, 32022]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));