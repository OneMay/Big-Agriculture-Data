(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('东丽区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "120110",
            "properties": { "name": "东丽区", "cp": [117.313967, 39.087764], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@CK@QOCEAEK@KAAKAKEoRECIYK{\\Af@BMb@@WAGBC@GV@KYBUkB@@OD@AEUE@IQDAGSJEDFD@CIDAAKDE@KECOKKEABMVMRGBSGE@KDCDADDN@FCHCBGAIGUKUEcB]JULINIZGD[AU@QDMDGFQR_NODiBcDBLHJDCDDF@@CB@@CLBBDXEAEB@@ADAFBHNBFA@BHC@@DHFNKhDD^DM`UA@LHBAHF@EJWE@RCFCCI@AFGA@BKARP_^ZXZL\\JfHNHEdEAAFBBQCAFPHRGtMBEB@NB^Cb@lECFHDPD@DNBJCFE@CEG@GTCPHBF`@JFBCHJJKRCP@JGTIAQGIDAPAVH@GCEKEEBAAVEBDADPFBBCFBBHE@WHClQPCFBTARE"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [120391, 40118]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));