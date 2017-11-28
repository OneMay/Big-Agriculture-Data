(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('梁平县', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "500228",
            "properties": { "name": "梁平县", "cp": [107.800034, 30.672168], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@GG@KACugC@ECOCMQOEGIA@KRGBEACICAACDGCIIICGIMCO@ICAOHADGFEDEAEBOPKBCCGBWPHNEJDNCHDBALFDBD@DADIB]CGFAHGJC@EGC@IFEACAEBECKFC@KG@A@CFCBECKGIEGEC@EC@BGEAFEEAHC@GBGAOBEIC@CBA@AEGBCCGDABIDCDCACEEAFM@GLKFAFBB@DED@BC@CBSPEABDAB@FD@AD@FGB@BCAA@BDGBBDADAA@AA@EDK@IFGHGBEGMUIIEIMIISQWWSS[KQQQKOECIFAH@F\\`HPBHAFEHQLYBWAEFHH@H@DGFI@GIOGKIA@ADFHCDaIK@cDGDIRKBEDDPAFADQIUDCA@GGIMCI@MNMAGBQIGIGKEA[FIA@BBFEFGB@BDDEAADCA@DGHUJURK@EDWFHLDAHEHCFBJFPHNNFHABIDQPCFBBNDJLVRDHPD@HBBHDDD@LNJHBNLDHDLFHDN^bNNDH@DABMFEFMJUHWBIL@JEDCDM@AB@@ADC@JJ@HADDBBBC@EAADBDBBAJ@BKDa`AHGHAJGFCFBJBDHAP@B@BHLFCDE@AD@FBDFDFLAPDBBCDABEDAJBHEBFFDAFCDADCD@DB@JANB@JHB@BALDBHBNHFCDBAJE@E@ABHDNCDB@DMHHJK@@B@FFJAHCBEAMJB@D@^RTDDHFDD@FALKDGBAACFCD@DB@HF@@DDDRCFDFABBDCB@FBFFFCD@BCFDDAD@BBD@FGFGD@BFDBPBJALERCDEAKBGNIHCFCF@RDJFFFHPZZJNJHbfH@HCHADBHPLNlEFC@GDCFCD@DCBQDDB@FEDBDCEG@E@ACACCAKBED@DEEC@CFBBACC@CDAEEDAFABADE@CBGD@FCHBFANHL@JELAHCXYHEJARDNGVCFDLNXRLFPKHITYHQHC@CCG@GJKDCPENIDEJIF@FGTQFITQFClCfIPATBPD`PFFT@VBLCZOKKCKGG@EFC@IACHIACFC@AEEDE@CCISGQ@MASFGAYSCEAOAIOCBIPuJIHK@EGACA@CFOHG"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [110628, 31308]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));