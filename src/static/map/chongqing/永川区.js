(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('永川区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "500118",
            "properties": { "name": "永川区", "cp": [105.894714, 29.348748], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@AICUEEAMEICKAIDWEgBGACGO@GDA@G@EEGBKIQ@GACCI@E@IDCCEKACCDCFBBA@IBAHCBA@CCC@E@QKUW]BE@QEOCC@EISAIDIGK@MBMAICIDEEIDGAEECDOEAKOOCYyA@G@EADGGEG@EMGCCIGEIGCIBEICACCSBG@KEEIBGCJGACGEEIKICIIACCEIBEACWIIGACFG@CG@EACC@IBGFCBIJ@FCCUBOAGEAI@UGMEIIIK@KCCCAO@IAMGEIAEAgBSAKIIcMOIEKBILSMEQBGAOIEAEBCFEJBHFDLCD@JRKBCBGNGHIRSDEHIBILGB@BFPCFFF@NEHC@BDOJ@DCD@DE@BD@DG@ABDBABBDE@ABC@DHF@CFHDBDFDCDHP@BBBBDB@@FCFIBKFCLAHAFUVAF@HFXFJdN@HCFEBEBCAKKG@CBCD@LDLABCBBJADBBGLITEDK@E@EBCF@FFH@ZCLFJJXCBC@EFF^KVQhCVBJDHJBbDBDCFUHGAICKIGEGK@OSAEBGBSRUD@FORENGDDBFFGBAD@D@BF@BFBBLCH@FTFDFF@DGJ@DFH@FDBD@JEBAJDPPVDFAFBDDDJJFHBH@B@@FAB@FFAFBHEHF@BFDBFCDFDPADCJEAAF@AEFB@EF@AADABAFFDCBFLBBFD@FBDHHZEL@NLDFND@HLHBJLH@DDDJ@DABFDDTDH@HDHALJH@DDJDVFL@HHRBJLRFJLJPFFDHFF@PEL@DDFFGJBHHJLFDJJNBAL@BACCBAJAJCAC@AB@BCGK@GDEFCFIVA\\JDDAD@DABBBPCBGBABBFHB@FEDIACCBAADEDABBABDBHAL@PLB@BGL@@AGADELL@FPABCEIFGAC@EBAH@DCPEHBFLDB\\DP@`HNAH@HFRTTB"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [108636, 30256]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));