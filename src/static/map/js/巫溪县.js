(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('巫溪县', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "500238",
            "properties": { "name": "巫溪县", "cp": [109.628912, 31.3966], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@NEHEJCJIVEL@NJNDH@JFJ@RGJAXBPFDAPCDM@CBATADCBCBCJBFC\\BDABC@AKQFEBWRSDIEMBK@UEMJEPSFGHELCDEAAOCMAGCA[FG@CWEQICMKM@CRMNCJ@PBPBHALDTA\\DFAJOH@lZRBP@VEVQDCDMFEFCRALEHGNEX@dDJAHAJMJEDEF@VDR@RJFBFA@AGCAAGGWKCKCEOCOKAC@CDGIcHQAEEIDSBEEEEUOWEKCCKE_B]C[EgK_JMBACOBGEECKAGCSCK@AKBGGE@GMBE@AOSMKBIHIDOACBG@KDQKCECKCE@CDKIIAKFS@OBCAAG@ODGBEAIIc@MCG@CDBLKCC@EJMLC@EE@GEAOG@CCASAIADM@AC@IC@CCCMY@ABCHA@ASCK@OKMKGIMAABELEB[@KFI@YGCECGC@_BEJUDc@UEGCAOAAICMGA@ENWHGFC@MEGAQBIDEHDF@DAHBH@BGPQJADBREBkBCDADJBBFCFCBMBOHEFObElADQDCAGDGBG@KDEAE@ODGFGAADGBKDgDOKA@KHGBUGE@UHE@EAY@IBGDeBKFSAaHKCMGGAIBMFM@MFMEKEQAMF[DOBSLG@KD[DGBULCAQICBCD@DI@OCE@I@KBINQISDCGOAEBCFE@MEEAGI@KCANEBCBCESFU@GACCAICCD[DIHSBODI@MBABBJABEBOBCFDPCH@BRDDD@BKFIL@DIFQDSJEF@DBDNJNR@FAFCBK@QLG@SJSFQBOJYCAB@DCHEFGBEFSFG@MJE@A@FF@DQT@HFL@FAFGH@D@DB@FBHDFCF@HAL@HDJCHCDD^H\\CFDBFDJBTBNP\\DDLBBFNBDBBNHRDNDDBBRCN@FD@DB@\\GF@HDLBJDJJJRbXF@FCHBHDDHAJGHGBAD@FDFHHATJLCJFFFBAFBDJBRADKDCh@NDDBDHBBLD@ACCAC@CFAzCVBLHARBFBDHBDD@DGFEPBDFDvBVADBDFNDDHDBH@DHFAJEJAP@HCNBDEF@JBBDDB`ARLLB\\GDIHCBCB@B@BFDDFBD@XGFBDCF@NDFC\\AFCXEBCFFBFCHGHABJ\\@HCLDBFCTEJCNAP@PETDFAJBVKNACfAPBpGLBLDdBDD@JDFFDD@HANDNAHDVBDCFK\\ADB@HDBN@NBZIDBDDPBVHLAXHNFFBD@PGJAH@PFLC"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [112216, 32489]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));