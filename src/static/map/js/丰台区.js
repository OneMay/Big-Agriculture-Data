(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['exports', 'echarts'], factory); } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { factory(exports, require('echarts')); } else { factory({}, root.echarts); } }(this, function(exports, echarts) {
    var log = function(msg) { if (typeof console !== 'undefined') { console && console.error && console.error(msg); } };
    if (!echarts) { log('ECharts is not Loaded'); return; }
    if (!echarts.registerMap) { log('ECharts Map is not loaded'); return; }
    echarts.registerMap('丰台区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "110106",
            "properties": { "name": "丰台区", "cp": [116.286968, 39.863642], "childNum": 1 },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@@KBAE@BEA@AKA@@MJDPAPBDA@CJ@@GBA~F@GEAJALD@CF@@CD@@AD@@GJ@@BN@DAH@@BD@AHD@@DB@@BA@@F@@C@@DF@NBhABBB@@CC@@IB@@AB@@CDC@DB@@BNGD@@BHE@BB@@ADCJ@AEC@@AC@@CCBAECBADAAEDE@BCA@@AIABGE@@CA@BBC@@CACC@CDACB@AAEAAIM@@EG@@EA@IFAIHC@CBA@AA@BGE@EB@AAB@BC@AKB@JDDEBCB@@DF@DC@AB@@CA@@CJ@@QCA@BK@@IA@@CqA@CB@BGB]MAA`KA@AKBALO@@AE@@LCHF@CLS@AJSBBBK@AIWACEG@@EAG@OG@MW@CG@CDCBCDDBADC@IZBBA@EAAFJDCDICCH[CSIC@AFCDE@@EIABFALDF@DAJONCNEBUBA@BCCAY@@IDEKIEABICA@CEAACAA@[AOKB@DG@EBACG@BDC@BDKBO@ACCOGKABCECBAAKA@BE@ADAABA@AC@CCCDCCABBDA@AAG@EEC@@AG@AFA@@GA@AHCBBDCDBBB@BA@FA@@AC@@BFLD@BA@AB@BBD@@BBA@BH@B@C@@BFBGBBDE@ABI@AB@AA@AB@HE@CBAEABM@BEGACB@EAFAAC@BAACI@AFACA@BHCLBBADBD@DA@@B@DADANBHDBADC@F@ARB@@FGFAA@EA@CHA@CAAB@DAFKDEDMBMHDF@DHDDARDANEJHFPDRIHBJDLADB@DBDNBPHLBLFTFNBFAFD@FD@PCHDBCBBDEBBRGVAHDH@LGDEBCDBDACHF@DCH@@JH@@FJ@@LB@FABBDAAD@BH@@DB@BBB@DALDP@@AD@BD@@SBAFFHB@AADH@BBEBFDJBBBZ@"]
                ],
                "encodeOffsets": [
                    // [
                    //     [107566, 25521]
                    // ],
                    [
                        [119118, 40855]
                    ]
                ]
            }

        }],
        "UTF8Encoding": true
    });
}));