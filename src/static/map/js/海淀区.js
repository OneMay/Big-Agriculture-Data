(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('海淀区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "110108",
            "properties": { "name": "海淀区", "cp": [116.310316, 39.956074], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@AC@EHCBCGAYAwGtHYBGAOS@@ABeUGI@@JADGA@GBECAGBEACACB@AABKBICDCB@@AF@Ba@UBEAGDAAID@@Cq@AAIAECFA@@A@@AG@BC@BGAEEAB@T{AYB@fG@@B@BH@CDBB@BIAACQBAC@AI@GBQ@C@@BMCCDC@@LB@@DPBBBEB@@BDD@ED@BB@D@@BABB@AJF@@FE@@DCBADEDGJGDAHGBKF@FE@CDADBFAFDD@HEDIF@IACMICDCPABIEGAABBDCDGJDB@DDBLDVDBFDDCB@DC@ADEDA@CBAFIDADC@GDEAGFCDQHI@KAC@@BMDQAIDE@ECUAGDC@GH@FADGN@DCDHN@FKHAD@FADGFCA@BCBEHCHCB@BDJFB@DDDLFBHNDBFDBBNHAFDDDDDJA@@HBFBDEB@BCDAHDFAHC^DDCF@BNh@bF@DCDH@AHCFANNDLF@HFF@F@BPCB@DHRBBMDG@KHEFAFFB@dMZ@A]A@@EE@DIEG@CHCNBJEDBBDCFBDJA@ABAACBA@C@CFA@CIABCDB@EPBBCAANYVHZmFDFCHB@CJDPMDBBAHFLBDGF@AJJ@AHF@BCDBADLBL@@FP@D@ACB@BAJ@FA@DBABGICBAEA@BAAABCA@GIADKD@@CJ@@EFBBAH@JAD@"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [119185, 41003]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));