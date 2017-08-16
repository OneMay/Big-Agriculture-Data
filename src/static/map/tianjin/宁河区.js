(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('宁河区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "120117",
            "properties": { "name": "宁河区", "cp": [117.82828, 39.328886], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@ABCJKD@RNDL`APGJIGQEEDAE_XGGQLNFUNQNKGIHLHCBDDABDBIJEEORFFAFDJAHC@CJLBDHJ@DJZF`AFEDB@BX@DB@DHABA@MF@@AZCHAN@@GfBBBADDB@BEFAHBBLCBFDBHAFCLFDAJDHEDDL@CHDBH@CI@AHPJDDD@DCB@DDDVDHBBCNFCFIAGNDBCDCRABDBCREAQ@FJB@AB@HFNFEJLFFADEDCD@PFAD@DJ@BFdCTFLHPTEJGBCPVFBGJB@GJB@EFG`FBCHB@DNBCJB@@HDB@@BXjJNLGZ@DBBrMACFANDBFP@JHBCL@FFATLDADHBDAPEAC@EBIFIJGNJJ@JBJJHJHFSZA@BND@@LVB@BJ@AFDBBDEDILjTABlEHHTBvWVAPDHCDFL@LHHB`MFALDNC^M^GJIEKABEGACC@IMA@AOB@EACIGAAEBAECCBDAAAAADAAEFCBDB@ACB@AAAABEBAD@AG@ADFAEB@A@GKSCCgG@AEJA@AFO@ECCQEEEOBGYG@BqGBKXBFKCYJKOIKNEASCeA_ECSBGFENEF@HDZ@FCBE`TEFB@EFHFFEECBCFDFADBDEUWCOGBAIECLG@CEIFA@CF@CGBEGACRA@GMHKG@CAAG^KDCsC@gRNRJCBDIDIAiRBD@TDDMFUCOEKGyIS@COU@AK@QD@JUF@FMHBFIEAfOgqEKIYFA@i@EC@d[@]dCBGHCHKAEC@CC@@AIA@AUE@cF@FGMQAOgFVSBEAODkRGD@XGFAADEAAOEBCACUFBBFALFDF@HUGOBCBHJBRSJIHO@QDILGIADIE_@AEOGSD@HFH@DEFID"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [120221, 40183]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));