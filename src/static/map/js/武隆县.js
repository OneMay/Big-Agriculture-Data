(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('武隆县', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "500232",
            "properties": { "name": "武隆县", "cp": [107.75655, 29.32376], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@PMHSJGDC@CC@IQEEE@KBCC@MBERSAMACcaqICFWCGBKE[DEAIIBAAHEECFC@EACBCICCGGAFCBA@AEBCEBGDC@CC@CEC@@CG@AEGC@UFU@MGSQUEI@GLSBSDMLQRMFG@IAIIWAEF]EW@CFERQDEBKAMGKC@CBAJABCBEAEGGYUMIC@CEMACBAIEKOGCGEQIGDGJM@GFKDQ@KGEDCA@EJWGKASEIAQCC@QFYCGOMCE@QJU@EIIMAEACEAKHQACOGYWICKAKDGCMAEEG@I@ADULIDSBEDB\\DRBZVpDVFNL`EHE@GBOHOTEHODKVCBMDAFBDBFAJADEFIJEAMOIGYIAE@CHCQgCAQAC@EGAG@GCANAD@JCNADaEGHGAKDO@GEGBEDE@KKBCD@@A@GEIE@CBMBCDCNJN@FC@@CC@EDCFAF@TGBAHAVBPMNDFABGFO@GCEEAICGGEKEOMCAGBS@SS]QGCM@CBIGEFOFABFH@F@DCFDLSFOJE@E@[[E@GDE@ECQAGGAHEB@XEJJNDJCRBDCNDH@RBFF@NPBDHFDLHJGFI@EFEBGBOEOB@HHHEFIJEFE@ECCB@DBBHFFFHRLRBFSLYJCFUDMHC@AGEEM@OCE@EBCBCPUEC@BDABKDEDKCMDKHCBCAGDDTAJABE@ABGRMBOGQAGbMRED@DFH@DED@BFDNFBFJDFERDNF@BCB@DFFFBF@NFPLjbFH@LLPBPZZFJ@HDDFBH@TFT@VPJCD@LDFFHDHFJA@EPEJGDGPCDEAC@CF@FBDAASJSAEDATFAJDBDBDEHAJJPHAFBDHBJDH@DQFIb]PSPMJOJ[PWDIF@LLJF@JFHDLFDNH\\@BF@FDHFDZ`FBF@HAPATF@DCVBDADAD@NADCFGBGDDHCNBJBHHDFA\\HXLRLBDDP\\ZFJJHFJFHBDHDBJH@FFJFDFBFCDFDDEJCBC@ENSHCXQNHNJJLJFD@HINAHUBAH@DAFCEGC@GDBDCBGGBATIbKGMH@PDHQJCDAHFB@DCDGDED@DBBDCH@FBBLDDDDV@FGFCF@DBFCD@HDNLRBBAHHRDRBP@FCDA^DHJFJJ`BLC`EJCX@`MVBDEAGR[HW@ICWBCFGLJJFDJHFFJNJFBXAJBHAHFLKXGF@HDJALD\\@FAXO"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [110662, 30325]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));