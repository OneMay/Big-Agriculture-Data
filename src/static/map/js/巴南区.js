(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('巴南区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "500113",
            "properties": { "name": "巴南区", "cp": [106.519423, 29.381919], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@EYI_AMISAOEGFKAAE@AAKUCI@GG[CEE]Oc@IESCU@iAOCSEMC]ACAMIW@MGGAI@MAIFO@SCQ@]EEBIAAEBIHA@@GC·BGAOBABCCI@EDICWHMEEBUBAPAFADU@WB@HHD@BABIF@FBHCBIBG@IBCAG@GVYD@JFFAKE@OAB@HCDMYMCCE@AFCBADDBGBAF@FBBCCAMBACA@@DG@AEKAAEEACBUAKDEGGDCPEB@FBFABIABEIEC@EDCA@AAOBEHAHAHBB@ACHKIC@EFKGEMEGQEGDKCIIJCLCBaREACEE@ELGFEBEAGCQCIGG@GBCDCRILAL@HADEBMBEAACBKECABCNE@EEOSOEC@CFBLA@CAKBCDBDOFEEQGAECCIEWVAFGFUA@CC@KNGFIDAACSEGA@@FEBCEEKCBAABMCEC@GFE@IAA@F^ABA@ACS@AADECCG@EBIEMMCMMMFGKG@AAEBGMGEBEDWEADAFCBGAECEACFK@IDUVALBJFDF@FBFF@DEBEFALU\\EH@DHRDZABIAEBCFBFABSFI@CJ@BADE@ABDFAF@FHTCDGBBLCBAF@HMB@DFP@FG@GHSFEFCHHPEBE@GVGFBNCF@LAD@JBRFDGLHHEBE@GEODCAGKCAYEA@GFNLHPFNLN^R`LNFXBLARKTGH@FHAJM^GFo|AJ@RDZDNNJJ@bGJGNAFBDFFJDJH@BDF@REDIF@DCDCAAFMJF@BD@RQDBBHDDD@HFF@JCAENCDBJ@DCJDPDD@HGHCHCB@AFHFFIJ@DAEE@AJAFBFDHHLDFDGDCJ@BNHFF@DADBDVADABCAED@HDFA\\DHAJDDBFRZd@FNXFFN`@FPXDDBFLVLHNNBDPAF@NFJ@TKPOJCH@DDRnFJJJJLjLTLXFFJFbJPPJVFdDJFHLJFPXbHFHFJBHADE@CFGBGGGAGDGBECGDALCBCAMDQFE"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [109571, 30428]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));