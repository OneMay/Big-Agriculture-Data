(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('渝中区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "500103",
            "properties": { "name": "渝中区", "cp": [106.56288, 29.556742], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@DE@OCMIKMCcGa@EAGGCEAISBADAFA@AC@CAAO@CBA@ACCACBABAFBFDBIDBFCJCBYBAB@BXD@FRDTCNCXAJFFFFJHHZBHALGN@D@LFHFDD"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [109147, 30281]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));