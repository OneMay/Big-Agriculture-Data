(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('璧山区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "500120",
            "properties": { "name": "璧山区", "cp": [106.231126, 29.593581], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@ACBC@SREDDBFFAIWE_BCDADJD@@CEODCLBDEACCAKDAACCAGDIEC@CHUACCAKYMQCOAWGUWuMeIOKEMQSMggIEMEO@IQGBCCEHCAG@AAFGIB@CIEI@CEBEGCGFCDEVEBGAIIEDSNCDDH@FILQPMFE@IAMBODBD@FDDHTCVX\\LV@R@FDD@DABGDAB@JABEACDDDLBDFCD@J@FDJBD@HJRALFH@F@HCB@HHPBDAHFhC\\FRFJBNFFDVBJBBCDAHHJF@DDR`HbFHBJJRAHEFJVHVHDHRLJNPNHLBJPH@BB@FEDLPBDADIP@DM@ABBNDFDLFFBLAHFNBPDL@BGDIJ@DLDDDJHLBNTRLbLhZxxDHPR\\ZvnJFBFHGBENKBCBEAEFIJBDA@CACIMBAF@DEHBFA@AKUFALHBCECAGAKBGACHGFAD@FFF@LCTBoyIE@EKMICEDCDEBCCEGGEAC@KGMBCIMCECSOsCCE@ADCAAEBECAEBCHAB@QECBC@K@QBAHBBOFGEOGAAC@ODENCDEECKBG@IKDCHCFABAIIGSCAC@ECM_AMESHICAGBCQAmDM"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [108804, 30242]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));