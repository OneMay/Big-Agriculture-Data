(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('巫山县', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "500237",
            "properties": { "name": "巫山县", "cp": [109.878928, 31.074843], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@AK@MCACACEAEBSDMHKEGFIHBJCHMEWCCACDEACBGHGDIBKCMJgHMNKLEDGACIKIECE@ODE@IGGCAEEUCCCICOFOCAABKACUCAAEKEGKAEIFICGBODEFCAGD@FDDCBEACEA@CECCIBOACGA@I@CR@VA@CCAACBEFG@[GKBOCIPBhHFED@HCBMIMKCAEDG@EGIKEAC@ICE@KGKCKBGFGBGDCIUEIMOEMIMIOCE@CCKAGECEE@CDAGECEMGAEGCECAEDGCACEEC@AAABA@CECGSC@CBGDICK@UAIBIJADBHIJBJO@GDAFGDEDABBHAJBNCRCBEJIHEJ@JFP@BABIBICEJMAKAKDKEMEEECCI@EBI@CBANCHA@GCGAKJQBMFIHIBMAKGSMmQw_KCEEmGaOk_gYSIECOKCEAEBMACACDGHEAECCQEMKA@ADBFDHBDADCBEAMGEKGGIAGCcGEPKR@LKT@FDB@FBBADCBCFK\\OAGJIBEHKFAFCBABBFAFBDPDCNBNCBGAIHWAGBELQ@MDCRCFAJGHFBTLJ@LBT@BHB@PCR@AHBDADAFCHKH@FCLEF@DDDDJCJEJHPBDCNBPDFPLDJBFS\\IF@BNNhPHF^JHFTLJ@bVHBNAbRLDDBFHFDDXDH@HFHH@NJNDFFDNHFB@FCD@J@BB@DM\\@FXZ@FALDNKXCFEBM@QFMAUKWBWEUFeTGFC@K@YMI@KJQLKD@LCF@LDHHFHN@DEJKFMBC@GES@OAIEEBGDCFKXIHHJNLPLL@TD@BGBAD@BNZDD@DJDD@@BCNJBTBDB@DPHFB@HDDDBB@NKFID@LDAKDCH@NDd@JJFBHAPCH@BBAD@PETBLJJCL@DDFDLDFRLLCH@DAPBJCJGLATNBPF@NA@HHFAHBLL@TDHDLBFDHFPABDNA`IhL`HZB`AJDFFFLPXFVFFAFCTFJBFGTJbFKJAPBTJ^BJ@JEHEJMDQJIZMTCJCBC@CCC@ATQLGDIBABCDA^AVDPCVFNGFBJFD@DC@CAEBGJKHC\\EFEBKGQAGFONKEMBETWBGACCAEGAIDCLADABQBC"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [112808, 32055]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));