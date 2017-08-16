(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('南岸区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "500108",
            "properties": { "name": "南岸区", "cp": [106.560813, 29.523992], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@ACMMKGKUAECCOW@EM_EEMW@EACIKMSGSGCKB[CEBGCC@BFADCBUBACBC@CEEMG@ADIHCECKCGGIEKB@BFFCBI@EJGEBEA@GDGDGHC@OCICCDI@CAGBEBBDADCBG@IEC@CCAGCAQRC@@AIEENBDGFE@CJSFC@ACG@ALAFULKHAF@F@hFLFFHD\\@jHNDJLDN@LAJIDELAXBLHPHJ^PTBF@NEHIBQJQNIDAJBLHHBBAHIViDCLCH@PDHFHJPJpNNFFFNbBDHD^BpKDADE@GDIJE"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [109365, 30300]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));