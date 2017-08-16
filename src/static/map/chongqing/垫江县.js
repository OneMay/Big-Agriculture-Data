(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('垫江县', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "500231",
            "properties": { "name": "垫江县", "cp": [107.348692, 30.330012], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@CGSSQEECICCAO[SOMMIECKIG@MAAKMIC[_@CDCbIRGDC@C@ECIBK@AGEEAIBE@CC@CLYACCAE@OFMM@CBCFEFIBMAIEAIBGAG@ACACEEBKAEEAIBAC@IDCJEDEIIAUFAJDL@LDFDDH@DEPCB@BVFDIDCBGB@BCCEDEACL@HAPOFIEIGESGK@QKCCM@@CLKBUBEBC@EGC@ADCNALGACE@BIAIIDGBMIICACBSAIaMKGOKBCBCHCLGBEAKCAMECCckGK_c@OACIEEGBGK@EEG@BFGDAHGBKAEBCDALRP@BSNEHWNC@EMGEE@KQOKQOquECA@GHMFQBK@IEOGKCGBWVEBCJAD[L@HFFHBR@BD@DMPFDJDG^EFYLM@ECKBFHAB[N@D@JABULGFCHLBLABB@DDDNBBFAF@DDJD@VED@JNGTBHJHFNAPCFEJC@[CC@CFAJ@DNPHLLNFJ@HCDIBIFONADGJE@CDB@@DAFILSLMJMDEHJPJJD@bxJXJdP^HFFPDRHN\\bRNNHPN^dBPDFDJ@HCNHH@J@HLPBF@JHNHRJJHNJJDJJFDJNJNXNRDJXEFCL@VQVIHG@CDBBCFBCC@AHAFEAE@AJB\\EFBHLHJRJHANBNMJ@NDHJ@HDBVCRJBCBECOFCLAJQHCdCL@bJDCEGBCB@LJPHHJJ@HE@C@GGGFEXBZARKFGBEAGGO[_@EBGJE"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [110246, 31151]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));