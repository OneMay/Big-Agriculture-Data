(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('长寿区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "500115",
            "properties": { "name": "长寿区", "cp": [107.074854, 29.833671], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@LDFARYJYFGHERADEHSBCFAPCVBBFGJCJJPD@D@HCDODC@GHH\\JHF@HRR@DQNAB@DDBBDGD@DNXFBX@DABGDAFBAHBDPP@HEBAJBFFBD@JC\\LDDBFDPNJPR`VNLNPJNTRFHPLRTLJPXFGNCNITKJKBE@CA@DCF@HIBCPMJEJADC@GEIKMGKMO@CBIDED@\\DD@FIDEBOEMIGAGHSIMC@UFC@CI@CBEAEMACC@CAAKBKADGHEVKBA@I@C\\MBAEGLAFDN@ZKFEH]ICECNO@CACQ@GAEE@G\\KBCDIFAXUHALDPHJFL@RANEJGFDjnZXPLLRF@HFFND@VKHIFCNKQM@CDIKCOUQOCIMOCAAFADMKOUOYY]@CFCBCCEOODY@CC@CJKJECOQSCEEA@EDCAAIGE@A@CDCBC@EAAOA@CFABCAACAEQGGUMG@IFGACI@GECCAGBGDYCEDBBFDALCFA@AEGAKLCAHKEAI@AFC@CABC@AIBCCCCK@CBGBM@IEK@CGAAACDGEI@CDEHC@C]KEIAEKG@CAC[EECGAMIG@EBQGOIOG]QC@QQcPMEO@AKBCGAKIGAIMUEAEGCAIOMAAM@QGGAIDEFCRBLADKFCBDHAFCHBHFFBFAFEF@DAFEBGAICIEEH@FEB@DCBCGGCAPABEDAJC@KADLH@DDABGDBFQNJR@DCB@BBNBDCLABBDBHCDIDAF@JDFPHDTCPBHLFTlFDRXP\\FHMJKAC@E\\WFA@AEKBABEN@HA@E@I@CB@DBLEDIACBABA@A@CCGAA@@CKBGHG@EBCDBHADKFEA@KAAA@CBBFABKBCCBGMCINBPAH@HDXEBK@CBAD@FBDJFDDCDJBJDPBLFD@BABCBAJBNAD@HGDCF@DBBPDBTD^LD@BIB@DBDFBJFJDBDD@NKDABLFVZDDPD"],
                    ["@@A@A@D@"],
                    ["@@ABBA"],
                    ["@@A@@@B@"],
                    ["@@EEA@@FB@F@"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [109544, 30806]
                    ],
                    [
                        [109545, 30811]
                    ],
                    [
                        [109549, 30810]
                    ],
                    [
                        [109546, 30810]
                    ],
                    [
                        [109628, 30765]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));