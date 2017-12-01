(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('荣昌区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "500153",
            "properties": { "name": "荣昌区", "cp": [105.594061, 29.403627], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@PGBGCECKBEFAHK@EBAPEEINCDCGSAcJMHSFGBEB@HB@FD@@AB@HFBAAEJ@BFFAFCBCAIACDKDCF@FBFDBDAB@DJHFLFBHBN@FBHAFENDD@@CECBEFABABECEHAHG@AACFC@AI@AG@CFE@CMECACEBCHK@AI]AAGBAAAOJ@BDFBDAFEBCCECGBALBNFNAJEDC@CAMBCFEF@FCBAAEAIJ@FIBFFDCJB@JCDBAHIBCDBLCD@DF@CHBDBDDCDEBIDEFDTDFDBAACBCACCAEFA@EKCGLG@CCIDC@AAC@ABGFEBADAAHDDD@B@BIDAIC@AFAHCPGL@BAAEHADD@FBFPDNLJB@DDBTSBC@AC@@CJEJ@BCFK@EMICMACBED@BDBABE@GAAEC@GCEIG@CFEH@F@JJDABAKIGMME@@DCAEMKGFEAEB@EBA@EA@G@GAIECICCEAEBUCOOICABIFC@CA@EEG@CHI@CEEECESG@KDAAAEE@@A@CBCHAEECAHCFMPQ@EVCTOCE@EBCLKBCAGGIQASDGDEFCFJT@FKJEBGBEEQKK[ACIA@FBNBPCBCBMAEBYIG@QJG@SHCGBAECODKAUEKIIAKFEH@HJNADGDE@cOE@UDBDCDMHOBA@BDLDFF@BCB@HAD@DDBLBBFABI@C@@DBLAFQNE@COEEIDO@QECCIIAD@TFJCNALEL@HBFfZDD@HKJAHLH@BBBDAFD@DEJBFBB@DUPERCFSJEAAGCACB@BCBC@EBMDoEBDCBB@ABHF\\J@DCJBBD@LCFBCFBDIBHDE@BDC@ADCBADDB@BA@@BAA@BAAA@E@@CA@AFA@AA@BCB@BAAGBOAEAAC@SAAGACBEJEBGAAGCCKAC@OHCFBDNFHDBF@LKPKBIFAJ@HHVEXCJU\\CBEDDFUDIfBDDABDDBCJFLBJXLLAFDALEHEJBFPJBH@HBBB@NK@EIE@CD@LBBCAEFABBAD@DLPEFABLBBLFLNLNFHABADIHCHBHDBJELAPDDPFB@JFBBCHCNGFABBDCBBDH@AHDB@BXIJHJLHFNHHAFIPIPALCNDRCJDNAFDFD"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [108015, 30392]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));