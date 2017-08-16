(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('石景山区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "110107",
            "properties": { "name": "石景山区", "cp": [116.195445, 39.914601], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@HIDCACBAHBJFBADODCNJBD@JJEFC@GCCBEAEBCDCF@@ELEHABGHCHIFCBCDA@CF@@EE@BIA@BA@AC@A@@AFCC@AC@@FAAAOA@CA@@KD@DCND@AD@R@HAJ@@BBDRABDJB@AAADCG@@A@AH@@eN@C@@CC@@BO@KCCBA@AAA@@CG@@ABCCBAAEBA@@KI@@EG@@IG@CDE@DGCBCAADCFKHG@KCUBMHAACFAACDKPKFABALKFEHENCDGBMDAB@HEJICADED@BGJDLB@B@JDEFBBEH@DDABDD@DL@BCB@BGDETJHbDNDFANJ"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [118940, 40954]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));