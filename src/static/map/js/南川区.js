(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('南川区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "500119",
            "properties": { "name": "南川区", "cp": [107.098153, 29.156646], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@PBNHNADAFOBAF@BABICKBGFCDBDALGHCH@FDD@FCLCBAACD@VFBMHEJ@PDN@FD@HDBPGVCDE`KNI@AMUGQEEGEAA@CDAFDF@FEJIFEGG@GPAPFHAFAFEJ@HEGICKGEACMOE@AE@QCGDMACDQCIIMFI@WFAB]LMDAFICEBCGK@OBIFADCJBF@FIDABEGMAKEEAICC@CIQABE@ICOCEBEFIDQBEAEG@CNa@YBGFATFHQBSAICCUIECACBE@CG@CAOSAAHMBMDCFAdDJADCJKDGBSR[NGF@^BDGBKACMSMCECEEEQEECGBE@GDCCIFGCGI@EDCAUeEG@CDCBGKGEMECEBMAKEE@CHEBYKC@KDICEEBGFCRGBC@GCAMEGKMKQE]AUI]COGOEGGIODMAKAEGEG@]NUHENFNELEFET@TDJFJBHPB@JFBABE@MAOF[@DRTjEHSJBBHBIVEAECIMADDJABIGOEG@QFEACIKACDAF@JABDWBCAAAGYCCGCOAIGIAKDADFPFBNBHNG@KRECEDG@BBGLCB@FCD@HEJCBCDBFLEDABBDF@HDJCLGJOHC@GGEAK@EFEDELG@EP@FDFCHBDFFNBBBBJHB@JIROFCFCJSTQJEACBIJ@FIFBD@LBBNFKPDBABOFAADECCGFEEC@@BDFGDAFE@CCEBADAHDDABC@CJEEAE@EEO@IA@C@@AHGIEC@@BDBEDEAAEIJC@CCIBCJADABEDGA@ICBAD@FDLCD@BHFALHD@DFD@HHJGHHBBDBF@DEPEHGFKBGFIJIPDJCLFHHRNFHFEL@FJDGLBDA@GAGBGBAFBP@BDBFCD@JFAFJBBAAE@EFADOHCFHLCVBDAFBBFLBBFH@@CB@BDP@BBABEAE@ABAHCCABED@BDFNDNZDC@GBA@PLFEBIEC@UZ@HBHAD@JAHAJGDEAE@AJABC@GGA@@XCVEBOBADATFFGNDXCJ@FDJADABBPAHD¸@HB@JGFABBAJFF@^DR@TEPBJ@NBJHH@NHTDRBDPAFCJABEBAJBPAH@JEVGJKCGBAJ@DBHNAJDFNDDA@AEGAG@KBGBAFDNBHAFECC@CDWCEOMACD]FGEC@CF@@GDIBAFB@AGGIA@C@CFELIDB@HDDBA@EDCTDDCAC@AEC@CE@CEBECABAJCHCNAFGN@FKDATCPDP@\\HBDEPERCEEJ@BNJDACCDCDDD@PCB@BFLHFBLCHDDF@BE@@BBJADABIBEFBBPDDDDFLCD@HF@F@BD@JEFUDADAB@FDFBDABCD@BBEDDBB@NCJFFCF@DEAAEACQBAF@HFL@BAAEKSACBMBCFCIIAADAbBREN@FFCTBD"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [109816, 30085]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));