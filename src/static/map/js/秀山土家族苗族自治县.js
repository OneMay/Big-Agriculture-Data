(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('秀山土家族苗族自治县', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "500241",
            "properties": { "name": "秀山土家族苗族自治县", "cp": [108.996043, 28.444772], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@AWFEE@ACLIFKC[DICEAGFI@KFG@KBKIOAOAGBIHEHAB@FDHBJA@ACCBA@GGBAABCLCNADCF@FC@CF@@EACDAX@JCFG@IAESMAEDEHC@EC@CGKCAAKI@CI@AEBCACG@EBOGGG@GFGDAHAHCJK@EIGICiSkOWMIEI@GAEIAIQKAABCDEL@@AEE@AFCXMBGB@HJLHJBHFJFHHDDH@FCLGJIFEN@VLRB@HRVH@FCFBBADBFEB@AAD@BCACHG@MEACIDCFAFI@CFIF@FA@CAABEAAEDECO@IEAIGEACASCAGU]M@KBOFEDABAEGKEBIBIAABOE@QKSI]IIGG@CHKBKDGAGEKACGOC@OACEEAGCCKACABACGJKACAEEGOBECDIEUC@MFC@AAAG@CJM@A@CCAAEBQCE@GOcEEGCVKFEBCCEQKGIFS@GKOIOGOKKGC@AFICIIIICIGCGCAEAOAAGKQJO@EAI@AVUHMDSAEAEGCMAEUGAQJGFILGDM@MFGBCD@NEJICEBGHC@ACBEYc@IFM@IAEGUGGGCU@GACBIPEFIFAAMDQLYHODMFCFBLBHFDBDCJQJE@QC]HGAQIeMSMG@IBSNEH@NMNCL@TEJMEO@CACGIYeMGCEEAMM]EAABABCH@PDNCRCHGFIBECE@C@ABArADKDEH@JCNAD@DBLBDFDHBNRNJRFPFJNBFCFKFADFNHHBBDFJFFV@JCPBFJNBJ@BCDQBSHEFDH@FNVBBBJDHFFFDBFFFE@KVEBSJ]NADDDDB@LIFAD@BI@IDGBEHCHCVBTHTBLDHCJNAF@FJPJHBDD@@HJBHHDNBJATHBBCFBB@PPVHFAFFDBFNFPNBHFHPBBBBDF@PALJPDDDJANJHDBBTDPGBCDAF@LFPDHDF@\\IP@bMBBDFFTBFBJDDFRHRFPJR@FDJ@FBFFBLEFBJXDNFBDBHIJALGPPJLJJDFJJHRR`Lb@HCLHHNFDHNDBHH@HFDDDBDDJTNHAFDJ@DCBC@GIICCACB@DFNPHDHB@JCF@FJFDHAZFDD@HXLJBHAPJDDHCLBNPJDBDRPBLNFF@FFFCl@"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [111858, 29574]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));