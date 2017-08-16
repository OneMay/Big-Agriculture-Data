(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('西青区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "120111",
            "properties": { "name": "西青区", "cp": [117.012247, 39.139446], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@CGECABC@@EDAQMGClgD]DM^c^YHCF@VrwJBBINBHAFAHBDAN@LDDGCCA@AC@AACBAAEFKA@KDCCJCJDFGF@DCBGDQJERFHGMCLEAAGAFGMMAWE@BHQLKIBAJECCCAAGQW[DAAjS@AIYXKGGT@NBFEBABOJBDMFADGG@BGH@@AACFKGCG@FMWMDABCBAACLCIGCAE@[P¥\\]N¯MNORU^]XKF`_XIIAIkDDZF@@FMDJLmTSDaHgDBJE@@DOBDH[HFJCBCGCBIMKH[L@AAAADUBACECGHWKCHTHBHaJDLF@JNF@FNLAH\\FABPD@EF@@HELCHVF@GXBB@DJBI\\PB@BN@BHK@GBAJ\\F@AACLABBAB@DFHB@FFJCDL@BA@@DF@JEBKHB@CjHBENDH@HSFBDKEAFG\\H@DE@AF@HHBANH@BQ@CBGNFT@`LFABIN@ALDBCFRHFB`D`ANANCG[DM"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [119940, 40092]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));