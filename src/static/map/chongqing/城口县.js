(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('城口县', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "500229",
            "properties": { "name": "城口县", "cp": [108.6649, 31.946293], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@FGHCDMPGHAJMFCh@PDZANDJBTATIFCDG@KDEAMBKJELGJAPULCNInAHAJENCVE\\U@EDELMDADGFCHKHCTEBGDAXKLCPFH@V@VBJCXOH@JFJBVIJDH@ZONCN@PMTGJAFDB@heFAPCVKNKHILILGPIRSHKHCL@JCXK\\KHCHIh]@IBEDCJ@BEAGMYBKBCDAd@fQHBHBNERIFB`EDCASHSFCKCYECIMACCBIDA`EDC@ECCDCNCFC@GE]DOCAEBSCOFO@MBIDKBGDEDA@AADK@GI[BAHGDGAEEEADWFED[BEDMCE@CDEAWHC@EACCAEA@A@ADGDCJ[HKAQK_BCAACIAE@CFMAGDO@IBIFEBCGG@CACGMCCECAUBcAK@GACAACFOHE@CCCGAACAEDMAEKEIA[@iDEB@DBDDD@BKCAACGCAKCi@CDCLQBGAAA@C@CEAO@EBOPKBOLGTEBU@CB@FABC@ECQBEAeD[C]JCKAAO@GEBEGKKKEQ@QMIKAACECCGQBIIUCEFOHC@EACEBGGASDEGGASDG@CBCBIAEGGBIFCD@DBPCFCFIDMNEEM@EFEAUJK@AFG@GLGAEBADDDEDSFA@CGA@WJMAWJED@HKD@DKHADBFHDJBBDCRGT@HGHSHADpfLFBDM@EHKBGAGFKD]PA@CC@FADBHUEEBIDK@GBGDELBDTXBF@FGHGBKAOCCE_DGHkTQJCF@REJEFDH@@@B@BMDGAECC@EB[DUJOTANIDEDCHKPUZGHIDK@ABACC@IHCFHdAHITAHGJGBMLKFBDJ@DF@DCNDHF@NIFAD@DB@LDDJDHAF@TRD@JEFGRKXE\\UNPPJHF@B@DILEB@DIDKDYNIPEBABDDRDJJJBLDJHFF@TELOHIBEDCHBFFFFBFCF@JBHDNJFBJCNELKFAHDJ@LB@BF@NKLCJAHDVN@B@BH@DFDLAJBFAFSDEDONEHCJED@DBBADEHKJCF@JKNQNM@@FCBK@GD@BDABBFAFF@DMJWT@DBBL@FBPPXRHDH@dQDBHHH@HCJALGRGRBTAJDFDJNFFRBRLBALCJGFCFCPIHGHGRCPBLEhCDCFGHMBAHAJEH@JGJCFGRIJKFCTE"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [111254, 32901]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));