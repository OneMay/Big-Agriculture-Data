(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('奉节县', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "500236",
            "properties": { "name": "奉节县", "cp": [109.465774, 31.019967], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@BGLICIMLGNLB"],
                    ["@@JGLWDEHCFAJFPBT@HFD@NALEFI@CGMGECG@KDE@KLCRKLIJ@ZNL@D@HEfSVEXFXAVLNBREN@FADELWCMBK@EWY@EN[@CAAI@C@EDA@GECMEEMCMIG@EG@GCGCWECEGCAKCaQMBGAaUI@SKGE]IGEgOMM@AJET[AECIOKCEAODMACGOFIDICICC@CFEDK@ELGDGBEBCACBGQ@ODA@AGS@KAI@SKEAHGBIDEDQNCR@FKHAXBJGHBDAAMDMOCACBEAEBADABELEFGJAHIPBL[DEDABCAA@ECA@ELS@KLQFOCC@ABA@KFOACBGEMQYoaoGWIESIUAEDCHABEOOGABE@EGEKAIBqQIB@DPVANELQAGGSIMKECWSMUCEeGOGQWYMEKOgOWq{[Y_kSSE@GJIFETBRADEH@DPZ`d@HSZEJMNc\\OHAF@BRFJXCDGAMKCAW^@DBJGAii]OYQcGKGAC@CBANFPDHABASM]MqGDIAY@ECGMYSCIAAEAA@EHAREBMGE@EBADDJWTSdDJF@GFGLDBNI@B@JEBAF@tNDJP@HDDFH@BCJKPEDG@ECAGKCCBELCBGBIAIEABKGCBABK@GBCAEDGDEFAHEFCACIECQCIGIHCFBHNVBDCJGDADBBLJBFCLGDADBHFFFDLJAHGBEAEB@HAHTHD@JFLBDFDAFDDFGJBLBBFB@HJF@B@DFHBHGFAD@FMJDFCFDJGHDJADEB@JAFBFDD@DJ@ADEDABHFBDCFKF@DDBDJFBDH@BGBABBDHDAFFNFHHFNDVDFABC@MBAFALBnDdHFD@DIVBBHBBC\\C@BE`EJ@FFFLFF@JGDDANAHADKHEH@TBDBDJB^CpGJCBIFCRIF@DFBLB`@TCRKFADJXBDLFFPDHFDNNHPPVDHCFG@EFCHAJCDCBM@GPEACAEG_BEDERCHCDI@EDK@QCGDGCOCSOYCI@OHO@SFK@CD@DHb@NEL@DFDHNANDL@FABK@SFIHGDa@GDAFDLC^MRCbDL\\KHCF@FFFPDDL@PAD@BDAhGJARAFCFGHELIJADAHDFI`GHIFQHMB@FEFI@CDLNFVJF@JLJBFBJGJAJBPFJBH@DE@AB@RLCR@NFNFNEN@NEJAHBNHLDbGTBLEfAHCJAZ@FBF@VGF@VHHALGB@NJFBlELCBCHBHEPCF@FBLCH@HAHCDBRABEFkPaFEPGNADADEAEIABCDClAFAAQBCRIHO@AAGBG@CCEFGFCHAR@THJEXGFMB@NHJDBBBPHDVFd@VCFI`AD@DHDFZHJ@LE\\@FAFKBANB"],
                    ["@@CB@AKAETILCHDLHDHFHBRB@sEA@GCA"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [111718, 31314]
                    ],
                    [
                        [112199, 31995]
                    ],
                    [
                        [111720, 31314]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));